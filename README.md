PRODIGY_FS_01 — Secure User Authentication

This project is developed as part of the Prodigy InfoTech Full-Stack Web Development Internship (Task-01).

🚀 Project Overview

The objective of this project is to build a secure user authentication system that allows users to:

Register a new account

Log in securely

Access a protected dashboard only after successful authentication

Logout securely

🔐 Key Features
Feature	Status
User registration	✔
Secure password hashing	✔
User login	✔
JWT token based authentication	✔
Protected routes/pages	✔
Logout	✔
🛠️ Tech Stack
Category	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express
Database	MongoDB
Auth	JWT + bcrypt
📁 Folder Structure
PRODIGY_FS_01
 ├── client
 │   ├── index.html
 │   ├── register.html
 │   ├── login.html
 │   ├── dashboard.html
 │   ├── style.css
 │   └── script.js
 └── server
     ├── app.js
     ├── .env
     ├── config/db.js
     ├── controllers/authController.js
     ├── middleware/authMiddleware.js
     ├── models/User.js
     ├── routes/authRoutes.js
     └── package.json

▶️ How to Run the Project Locally
Backend:
cd server
npm install
node app.js

Frontend:

Just open client/index.html in browser.

🔗 Repository
https://github.com/logeshp1206/PRODIGY_FS_01
