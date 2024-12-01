RBAC System
  A Role-Based Access Control (RBAC) system built with Node.js, Express, and MySQL, implementing authentication and authorization.

Features
  User registration and login with password hashing.
  Role-based authorization for Admin, User, and Moderator roles.
  Token-based authentication using JSON Web Tokens (JWT).
  Secure endpoints for role-specific access.
Tech Stack
  Backend: Node.js, Express.js
  Database: MySQL
  Authentication: JWT

Clone the repository:
  git clone https://github.com/yourusername/rbac-system.git
  cd rbac-system

Install dependencies:
  npm install

Setup environment variables in config/db.env:
  DB_NAME=rbac_system
  DB_USER=root
  DB_PASS=yourpassword
  DB_HOST=localhost
  JWT_SECRET=your_jwt_secret

Start the server:
  npx nodemon server.js
