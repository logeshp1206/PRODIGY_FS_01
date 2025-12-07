Full-Stack User Authentication System
PRODIGY_FS_01 — Prodigy InfoTech Web Development Internship (Task 01)

OVERVIEW
This project is a secure user authentication system developed as part of the Prodigy InfoTech Full-Stack Web Development Internship (Task-01). The system implements industry-standard authentication practices including password hashing and JWT tokens to protect user data.

CORE FEATURES
• User Registration - Create new accounts with secure password storage
• User Login - Secure authentication with credential verification
• JWT Authentication - Token-based session management
• Protected Dashboard - Accessible only to authenticated users
• Secure Logout - Token invalidation and session cleanup
• Responsive UI - Works on all device sizes

TECHNOLOGIES USED
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB Atlas
Authentication: JWT (JSON Web Tokens), bcrypt for password hashing
Package Manager: npm

PROJECT STRUCTURE
PRODIGY_FS_01/
├── client/
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
└── server/
    ├── app.js
    ├── .env
    ├── config/db.js
    ├── controllers/authController.js
    ├── middleware/authMiddleware.js
    ├── models/User.js
    ├── routes/authRoutes.js
    └── package.json

HOW TO RUN THIS PROJECT
Backend Setup:
cd server
npm install
node app.js
Server starts at: http://localhost:5000

Frontend Setup:
No dependencies required. Simply open client/index.html in your browser.

AUTHENTICATION FLOW
1. Registration
   - User submits registration form
   - Password is hashed using bcrypt
   - User data is stored in MongoDB
   - Success response is returned

2. Login
   - User submits credentials
   - Server verifies password against hash
   - JWT token is generated and sent to client
   - Token is stored in localStorage

3. Dashboard Access
   - Client sends JWT token with requests
   - Middleware verifies token validity
   - Access granted only with valid token
   - User-specific data displayed

4. Logout
   - Token removed from localStorage
   - Session effectively ended
   - User redirected to login page

KEY LEARNINGS
• Full-stack application development flow
• REST API design and implementation
• Password security with hashing algorithms
• JWT-based authentication and authorization
• Protected route implementation
• MongoDB integration with Node.js
• Frontend-backend communication

REPOSITORY
GitHub: https://github.com/logeshp1206/PRODIGY_FS_01

DEVELOPER
Logesh
Full-Stack Web Developer — Intern @ Prodigy InfoTech
Project: PRODIGY_FS_01 — Secure User Authentication System

