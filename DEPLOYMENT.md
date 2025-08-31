# 🚀 Deployment Guide for School Management App

This guide will help you deploy your school management app to Vercel (frontend) and various backend hosting options.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Backend hosting service (Railway, Render, or Heroku)

## 🎯 **Option 1: Vercel (Frontend) + Railway (Backend) - RECOMMENDED**

### **Step 1: Deploy Backend to Railway**

1. **Go to [Railway.app](https://railway.app)**
   - Sign up with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"

2. **Connect Your Repository**
   - Select your school-management-app repository
   - Railway will detect it's a Node.js app

3. **Configure Environment Variables**
   - Go to "Variables" tab
   - Add these environment variables:
   ```
   DB_HOST=your-mysql-host
   DB_USER=your-mysql-user
   DB_PASSWORD=your-mysql-password
   DB_NAME=your-mysql-database
   DB_PORT=3306
   PORT=5000
   ```

4. **Deploy**
   - Railway will automatically build and deploy
   - Note your app URL (e.g., `https://your-app.railway.app`)

### **Step 2: Deploy Frontend to Vercel**

1. **Go to [Vercel.com](https://vercel.com)**
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**
   - Add: `NEXT_PUBLIC_API_URL=https://your-app.railway.app`
   - Replace with your actual Railway backend URL

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your frontend

---

## 🌐 **Option 2: Vercel (Frontend) + Render (Backend)**

### **Step 1: Deploy Backend to Render**

1. **Go to [Render.com](https://render.com)**
   - Sign up with GitHub
   - Click "New +" → "Web Service"

2. **Connect Repository**
   - Connect your GitHub repo
   - Set root directory to `backend`

3. **Configure Service**
   - Name: `school-management-backend`
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Environment Variables**
   - Add the same DB variables as Railway
   - Set `PORT=10000` (Render uses this port)

5. **Deploy**
   - Click "Create Web Service"
   - Note your service URL

### **Step 2: Deploy Frontend to Vercel**
- Same as Option 1, but use your Render backend URL

---

## 🔧 **Option 3: Netlify (Frontend) + Any Backend**

### **Step 1: Prepare for Netlify**

1. **Create `netlify.toml` in root:**
```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Update Next.js config:**
```javascript
// frontend/next.config.js
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### **Step 2: Deploy to Netlify**

1. **Go to [Netlify.com](https://netlify.com)**
   - Sign up with GitHub
   - Click "New site from Git"

2. **Configure Build**
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `out`

3. **Environment Variables**
   - Add: `NEXT_PUBLIC_API_URL=your-backend-url`

4. **Deploy**
   - Click "Deploy site"

---

## 🗄️ **Database Options**

### **Option A: Railway MySQL (Recommended)**
- Free tier available
- Easy setup
- Automatic backups

### **Option B: PlanetScale**
- Free tier available
- MySQL-compatible
- Great performance

### **Option C: Supabase**
- Free PostgreSQL
- Need to update backend code

---

## 📝 **Post-Deployment Checklist**

1. ✅ **Test API endpoints** with your new backend URL
2. ✅ **Verify image uploads** work
3. ✅ **Check database connections**
4. ✅ **Test all CRUD operations**
5. ✅ **Verify responsive design** on mobile
6. ✅ **Check loading states** and error handling

---

## 🚨 **Common Issues & Solutions**

### **CORS Errors**
- Ensure backend has proper CORS configuration
- Add your frontend domain to allowed origins

### **Image Upload Issues**
- Check file size limits
- Verify storage directory permissions
- Ensure proper file paths

### **Database Connection**
- Verify environment variables
- Check database host accessibility
- Ensure database exists and is accessible

---

## 💰 **Cost Breakdown**

### **Vercel (Frontend)**
- **Free**: 100GB bandwidth/month
- **Pro**: $20/month for unlimited

### **Railway (Backend)**
- **Free**: $5 credit/month
- **Paid**: Pay-as-you-use

### **Render (Backend)**
- **Free**: 750 hours/month
- **Paid**: $7/month minimum

---

## 🎉 **Congratulations!**

Your school management app is now live on the internet! 

**Next Steps:**
1. Share your app URL with others
2. Monitor performance and errors
3. Set up custom domain (optional)
4. Implement CI/CD for automatic deployments

---

## 📞 **Need Help?**

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Railway Docs**: [docs.railway.app](https://docs.railway.app)
- **Render Docs**: [render.com/docs](https://render.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
