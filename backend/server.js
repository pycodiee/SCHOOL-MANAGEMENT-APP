const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
const schoolImagesDir = path.join(__dirname, 'schoolImages');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
if (!fs.existsSync(schoolImagesDir)) {
  fs.mkdirSync(schoolImagesDir);
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'schoolImages/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Database connection
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  },
  connectTimeout: 60000,
  acquireTimeout: 60000,
  timeout: 60000
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
  
  // Create schools table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name TEXT NOT NULL,
      address TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      contact VARCHAR(15) NOT NULL,
      image TEXT,
      email_id VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Schools table ready');
    }
  });
});

// Routes
app.get('/api/schools', (req, res) => {
  const query = 'SELECT * FROM schools ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching schools:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

app.post('/api/schools', upload.single('image'), (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !address || !city || !state || !contact || !email_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [name, address, city, state, contact, image, email_id];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting school:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ 
      message: 'School added successfully', 
      id: result.insertId,
      image: image 
    });
  });
});

app.get('/api/schools/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM schools WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching school:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'School not found' });
    }
    res.json(results[0]);
  });
});

// Delete school endpoint
app.delete('/api/schools/:id', (req, res) => {
  const { id } = req.params;
  
  // First get the school to find the image filename
  const getQuery = 'SELECT image FROM schools WHERE id = ?';
  db.query(getQuery, [id], (err, results) => {
    if (err) {
      console.error('Error fetching school for deletion:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ error: 'School not found' });
    }
    
    const imageFilename = results[0].image;
    
    // Delete from database
    const deleteQuery = 'DELETE FROM schools WHERE id = ?';
    db.query(deleteQuery, [id], (err, result) => {
      if (err) {
        console.error('Error deleting school:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      
      // Delete image file if it exists
      if (imageFilename) {
        const imagePath = path.join(__dirname, 'schoolImages', imageFilename);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
          console.log(`Deleted image file: ${imageFilename}`);
        }
      }
      
      res.json({ message: 'School deleted successfully' });
    });
  });
});

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'schoolImages')));
app.use('/schoolImages', express.static(path.join(__dirname, 'schoolImages')));

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum size is 5MB.' });
    }
  }
  console.error('Error:', error);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Upload directory: ${uploadsDir}`);
  console.log(`School images directory: ${schoolImagesDir}`);
});

