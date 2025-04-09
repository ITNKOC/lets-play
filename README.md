# Let's Play - Game Platform Backend API


A RESTful API backend for a gaming platform that manages user accounts, scores, and admin functionalities.

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [User Management](#user-management)
- [Game Scoring](#game-scoring)
- [Admin Features](#admin-features)
- [License](#license)

## Features

- **User Authentication**: Register and login with JWT token-based authentication
- **User Management**: View, update, and delete user profiles
- **Game Scoring**: Track wins and losses, update player scores
- **Score Reset**: Allow users to reset their scores
- **Admin Dashboard**: Special endpoints for administrators to manage users
- **Role-Based Access**: Different permissions for regular users and admins

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and receive a JWT token

### User Profile (Me)
- `GET /me` - Get current user details
- `PUT /me` - Update current user profile
- `DELETE /me` - Delete current user account
- `PUT /me/reset-score` - Reset the current user's score

### Game
- `PUT /game/wins` - Record a win and increment user score
- `PUT /game/lose` - Record a loss and decrement user score

### Admin (User Management)
- `GET /users` - Get all non-admin users (admin only)
- `PUT /users/:id` - Update a specific user (admin only)
- `DELETE /users/:id` - Delete a specific user (admin only)

## Technologies

- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **JSON Web Token (JWT)** - For secure authentication
- **In-memory Data Store** - Simple array-based storage (can be replaced with a database)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lets-play.git
   cd lets-play
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```
   
   The server will run on port 5000 by default (http://localhost:5000).

## Project Structure

```
lets-play/
├── app.js                  # Main application entry point
├── controllers/            # Request handlers
│   ├── auth.controllers.js # Authentication logic
│   ├── game.controllers.js # Game-related operations
│   ├── me.controllers.js   # User profile management
│   └── user.controllers.js # Admin user management
├── models/
│   └── User.js             # User data model and operations
├── routes/                 # API route definitions
│   ├── auth.routes.js      # Authentication routes
│   ├── game.routes.js      # Game-related routes
│   ├── me.routes.js        # User profile routes
│   └── user.routes.js      # Admin user management routes
├── utils/
│   └── auth.utils.js       # Authentication utilities
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Authentication

The system uses JWT (JSON Web Token) for authentication:

1. **Registration**: Users provide an email, password, and username to create an account
2. **Login**: Users authenticate with email and password to receive a JWT token
3. **Authorization**: Protected routes require a valid JWT token in the Authorization header
   ```
   Authorization: Bearer <your_token_here>
   ```

## User Management

Users can:
- View their profile information
- Update their profile (email, password, username)
- Delete their account
- Reset their game score

## Game Scoring

The API provides endpoints to:
- Record a win (+1 point)
- Record a loss (-1 point)
- Reset score to zero

## Admin Features

Administrators have special privileges:
- View all users (non-admin)
- Update any user's information
- Delete any user account

An admin is identified by the `isAdmin: true` property in their user record.

## Database

Currently, the application uses an in-memory array for data storage. For production use, consider replacing this with:
- MongoDB
- MySQL/PostgreSQL
- Firebase
- Other database solutions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created by ITNKOC © 2025
