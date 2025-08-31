# 🏫 School Management Web Application

A beautiful, responsive, and feature-rich school management system built with Next.js, Node.js, and MySQL. Features animated backgrounds, glass morphism effects, and e-commerce style layouts.

## ✨ Features

- **Beautiful UI/UX**: Modern design with glass morphism effects and animated backgrounds
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Form Validation**: Comprehensive input validation using react-hook-form
- **Image Upload**: Secure image upload with preview functionality
- **Search & Filter**: Advanced search and filtering capabilities
- **E-commerce Layout**: Beautiful card-based display for schools
- **Real-time Updates**: Instant feedback and notifications
- **Animated Components**: Smooth animations using Framer Motion

## 🏗️ Project Structure

```
school-management-app/
├── frontend/                 # Next.js frontend application
│   ├── components/          # Reusable UI components
│   ├── pages/              # Next.js pages (addSchool, showSchools)
│   ├── styles/             # Global CSS and Tailwind config
│   └── utils/              # API utilities and helpers
├── backend/                 # Node.js backend server
│   ├── config.env          # Environment variables
│   ├── server.js           # Express server with routes
│   └── schoolImages/       # Uploaded school images
├── database/               # Database setup scripts
└── package.json            # Root package.json with scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- Git

### 1. Clone the Repository

```bash
git clone <repository-url>
cd school-management-app
```

### 2. Install Dependencies

```bash
npm run install:all
```

### 3. Database Setup

1. Create a MySQL database:
```sql
CREATE DATABASE school_management;
```

2. Update database credentials in `backend/config.env`:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=school_management
DB_PORT=3306
PORT=5000
```

3. Run the database setup script:
```sql
source database/setup.sql
```

### 4. Start the Application

```bash
# Start both frontend and backend
npm run dev

# Or start them separately:
npm run dev:frontend    # Frontend on http://localhost:3000
npm run dev:backend     # Backend on http://localhost:5000
```

## 📱 Pages

### 1. Home Page (`/`)
- Beautiful landing page with animated elements
- Navigation to Add School and Show Schools
- Feature highlights and responsive design

### 2. Add School (`/addSchool`)
- Comprehensive form with validation
- Image upload with preview
- Responsive design for all devices
- Form validation using react-hook-form

### 3. Show Schools (`/showSchools`)
- E-commerce style grid layout
- Search and filtering capabilities
- Beautiful card design for each school
- Responsive grid system

## 🎨 Design Features

- **Animated Backgrounds**: Floating shapes with smooth animations
- **Glass Morphism**: Modern glass-like UI elements
- **Gradient Text**: Beautiful gradient text effects
- **Hover Animations**: Interactive hover effects on cards and buttons
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Smooth Transitions**: Framer Motion animations throughout

## 🛠️ Technologies Used

### Frontend
- **Next.js 14**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form handling and validation
- **Lucide React**: Beautiful icon library
- **Axios**: HTTP client for API calls

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MySQL2**: MySQL database driver
- **Multer**: File upload middleware
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variable management

## 🔧 Configuration

### Environment Variables

Create `backend/config.env`:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=school_management
DB_PORT=3306
PORT=5000
```

### Database Schema

The application automatically creates the `schools` table with the following structure:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact VARCHAR(15) NOT NULL,
  image TEXT,
  email_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🎯 Key Features

1. **Form Validation**: Comprehensive validation for all input fields
2. **Image Upload**: Secure file upload with size and type validation
3. **Search & Filter**: Advanced search by name, address, city, and state
4. **Real-time Updates**: Instant feedback and notifications
5. **Beautiful UI**: Modern design with animations and effects
6. **Responsive Layout**: Works perfectly on all devices

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel or your preferred hosting
```

### Backend (Heroku/DigitalOcean)
```bash
cd backend
# Update environment variables
# Deploy to your preferred hosting
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the console for error messages
2. Verify database connection
3. Ensure all dependencies are installed
4. Check environment variables

## 🎉 Features in Action

- **Animated Backgrounds**: Floating shapes that move continuously
- **Glass Morphism**: Semi-transparent UI elements with blur effects
- **Hover Animations**: Cards lift and scale on hover
- **Form Validation**: Real-time validation with error messages
- **Image Preview**: Instant preview of uploaded images
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Smooth Transitions**: Beautiful page transitions and animations

---

**Built with ❤️ using Next.js, Node.js, and MySQL**
