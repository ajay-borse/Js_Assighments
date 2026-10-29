# Assignment 9 – Full-Stack Integration (React + Express + MongoDB)

## Aim
Connect a React frontend with a Node/Express backend and MongoDB to form a complete, production-ready MERN stack application. This assignment demonstrates:
- Full-stack client-server architecture
- Cross-Origin Resource Sharing (CORS) configuration
- RESTful HTTP requests with Axios from React (`GET` and `POST`)
- Database modeling, persistence, and schema validation with Mongoose
- Asynchronous lifecycle data fetching using React `useEffect` and dynamic state updates without page reloading

---

## Tech Stack
- **Frontend**: React (Vite), Axios, Vanilla CSS
- **Backend**: Node.js, Express.js, Cors, Dotenv
- **Database**: MongoDB with Mongoose ODM

---

## Folder Structure
```
assignment9/
├── backend/
│   ├── config/
│   │   └── db.js            # MongoDB Mongoose connection
│   ├── models/
│   │   └── User.js          # Mongoose User schema (name, email, timestamps)
│   ├── routes/
│   │   └── userRoutes.js    # Express route handlers (GET, POST /api/users)
│   ├── .env                 # Environment variables (PORT, MONGO_URI)
│   ├── package.json         # Backend dependencies & npm scripts
│   └── server.js            # Express server initialization & middleware
├── frontend/                # Vite + React client
│   ├── src/
│   │   ├── App.jsx          # Main component with form & dynamic user list
│   │   ├── App.css          # Clean custom CSS styling
│   │   └── main.jsx         # React application entry point
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite build & dev server config
│   └── package.json         # Frontend dependencies & npm scripts
└── README.md                # Documentation and setup instructions
```

---

## Setup Steps

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB Community Server or MongoDB Atlas cluster running locally at `mongodb://127.0.0.1:27017`

### 1. Install Backend Dependencies
Open your terminal and navigate to the backend folder:
```bash
cd assignment9/backend
npm install
```

### 2. Install Frontend Dependencies
Open a second terminal window and navigate to the frontend folder:
```bash
cd assignment9/frontend
npm install
```

---

## How to Run

### Step 1: Start Backend Server
Inside the backend directory (`assignment9/backend`):
```bash
npm run dev
```
*(Alternatively, use `npm start` to run with standard Node)*

You should see:
```
Server running on port 5000
MongoDB connected
```

### Step 2: Start Frontend Development Server
In a new terminal, inside the frontend directory (`assignment9/frontend`):
```bash
npm run dev
```

### Step 3: Open in Browser
Open your browser and visit:
```
http://localhost:5173
```

---

## API Endpoints

Base URL: `http://localhost:5000/api/users`

| Method | Endpoint      | Description                                | Request Body                            | Response                                      |
| :----- | :------------ | :----------------------------------------- | :-------------------------------------- | :-------------------------------------------- |
| `GET`  | `/api/users`  | Fetch all registered users (oldest first)  | *None*                                  | `200 OK` with JSON array of users             |
| `POST` | `/api/users`  | Register a new user                        | `{ "name": "Ajay", "email": "a@mit.edu" }` | `201 Created` with saved user object, or `400 Bad Request` |

### Validation Rules
- Both `name` and `email` are required. Missing fields return status code `400` with `{ "message": "Name and email are required" }`.
- `email` must be unique. Duplicate emails return status code `400` with `{ "message": "Email already exists" }`.

---

## Troubleshooting Guide

### 1. MongoDB Not Running
- **Symptom**: Terminal displays `MongoDB connection error: connect ECONNREFUSED 127.0.0.1:27017`.
- **Solution**:
  - **Windows**: Press `Win + R`, type `services.msc`, locate **MongoDB Server**, right-click and choose **Start**. Or run in PowerShell as Administrator:
    ```powershell
    net start MongoDB
    ```
  - **macOS / Linux**: Run `brew services start mongodb-community` or `sudo systemctl start mongod`.
  - Alternatively, update `MONGO_URI` in `backend/.env` to point to a MongoDB Atlas cluster URI.

### 2. Port 5000 In Use
- **Symptom**: `Error: listen EADDRINUSE: address already in use :::5000`.
- **Solution**:
  - Find and stop the process occupying port 5000:
    - **Windows (PowerShell)**:
      ```powershell
      Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process -Force
      ```
  - Or change the `PORT` variable in `assignment9/backend/.env` to another port (e.g., `PORT=5001`) and update `API_BASE_URL` in `assignment9/frontend/src/App.jsx`.

### 3. CORS Error
- **Symptom**: Browser console error: `Access to XMLHttpRequest at 'http://localhost:5000/api/users' from origin 'http://localhost:5173' has been blocked by CORS policy`.
- **Solution**:
  - Ensure the backend server has the `cors` package configured in `server.js`:
    ```javascript
    app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], credentials: true }));
    ```
  - Verify that the frontend is accessing the exact backend URL (`http://localhost:5000/api/users`).
