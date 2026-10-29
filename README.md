<div align="center">

# 🚀 JS_Assignment

### Full Stack Development: Lab Assignments 1 to 9

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

| 👤 Student | 🆔 PRN | 🎓 Program |
| :---: | :---: | :---: |
| **AjayBorse** | **1272250586** | **SY MCA, Semester III** |

</div>

---

## 📚 Table of Contents

1. [Quick Overview](#-quick-overview)
2. [Prerequisites](#-prerequisites)
3. [Repository Structure](#-repository-structure)
4. [Port Cheat Sheet](#-port-cheat-sheet)
5. [Assignment 1: JavaScript Calculator](#-assignment-1--javascript-calculator)
6. [Assignment 2: To-Do List](#-assignment-2--to-do-list)
7. [Assignment 3: Form Validation](#-assignment-3--form-validation)
8. [Assignment 4: React Profile Card](#-assignment-4--react-profile-card)
9. [Assignment 5: Controlled React Form](#-assignment-5--controlled-react-form)
10. [Assignment 6: Counter App + REST API](#-assignment-6--counter-app--rest-api)
11. [Assignment 7: REST API](#-assignment-7--rest-api)
12. [Assignment 8: Product Management API](#-assignment-8--product-management-rest-api)
13. [Assignment 9: Full-Stack MERN App](#-assignment-9--full-stack-mern-app)
14. [Troubleshooting](#-troubleshooting)

---

## 🗺️ Quick Overview

| # | Assignment | Technology | How to run | URL |
| :-: | --- | --- | --- | --- |
| 1 | JavaScript Calculator | HTML, CSS, JS | Open the HTML file | `file` or `:8000` |
| 2 | To-Do List | HTML, CSS, JS | Open the HTML file | `file` or `:8000` |
| 3 | Form Validation | HTML, CSS, JS | Open the HTML file | `file` or `:8000` |
| 4 | React Profile Card | React 18, Vite | `npm install` then `npm run dev` | `:5173` |
| 5 | Controlled React Form | React 19, Vite | `npm install` then `npm run dev` | `:5173` |
| 6 | Counter App + REST API | React, Express | Two terminals (frontend + backend) | `:5173` / `:5000` |
| 7 | REST API | Node, Express | `npm install` then `npm start` | `:5000` |
| 8 | Product Management API | Express, MongoDB | `npm install` then `npm run dev` | `:5000` |
| 9 | Full-Stack MERN App | React, Express, MongoDB | Two terminals (backend + frontend) | `:5173` / `:5000` |

> 💡 **Golden rule:** always `cd` into the assignment folder **before** running any `npm` command. Running `npm` from the repository root causes the `ENOENT package.json` error.

---

## 🧰 Prerequisites

Install these once before starting.

| Tool | Needed for | Notes |
| --- | --- | --- |
| ✅ **Node.js** (v22 or later) | Assignments 4 to 9 | npm is included |
| ✅ **Web browser** | All | Chrome, Edge or Firefox |
| ✅ **VS Code** | All | Recommended editor |
| ✅ **MongoDB** (local) or **MongoDB Atlas** (cloud) | Assignments 8 and 9 | Must be running before the backend starts |
| ⭐ **Postman** | Assignments 6, 7, 8 | For testing REST APIs |
| ⭐ **Python 3** | Assignments 1 to 3 (optional) | Only for a local static server |

Check your installation:

```bash
node --version
npm --version
python --version   # optional
```

---

## 📁 Repository Structure

```text
JS_Assignment-main/
│
├── 📂 assignment1-js-calculator/
│   └── assignment1.html
│
├── 📂 assignment2-todo-list/
│   └── assignment2.html
│
├── 📂 assignment3-form-validation/
│   └── assignment3.html
│
├── 📂 assignment4-react-profile-card/     (Vite + React)
├── 📂 assignment5/                        (Vite + React)
├── 📂 assignment6/                        (React frontend + src/server.js backend)
│
├── 📂 assighment7/                        (Express REST API)
│   └── server.js
│
├── 📂 assighment8/                        (Express + MongoDB)
│   ├── config/db.js
│   ├── middlewares/errorHandler.js
│   ├── models/Product.js
│   ├── routes/productRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── 📂 assighment9/                        (Full MERN app)
│   ├── backend/
│   │   ├── config/db.js
│   │   ├── models/User.js
│   │   ├── routes/userRoutes.js
│   │   ├── .env
│   │   ├── package.json
│   │   └── server.js
│   ├── frontend/
│   │   ├── src/App.jsx
│   │   ├── src/App.css
│   │   ├── src/main.jsx
│   │   ├── index.html
│   │   └── package.json
│   └── README.md
│
└── README.md
```

> 📝 **Folder names:** `assighment7`, `assighment8` and `assighment9` are spelled exactly as they appear in this project. If you rename a folder, update the `cd` commands below to match.

---

## 🔌 Port Cheat Sheet

| Port | Used by |
| :-: | --- |
| **5173** | Vite frontends (Assignments 4, 5, 6, 9) |
| **5000** | Express backends (Assignments 6, 7, 8, 9) |

> ⚠️ **Only one backend can use port 5000 at a time.** Before starting a new backend, stop the previous one with `Ctrl + C`. The same applies to port 5173 for frontends.

---

# 🧮 Assignment 1: JavaScript Calculator

**Technology:** HTML, CSS, JavaScript

A simple calculator built with plain web technologies.

### ▶️ How to run

**Option A: easiest (double-click)**

1. Open the folder `assignment1-js-calculator`.
2. Double-click `assignment1.html`.
3. It opens in your browser. Done! ✅

**Option B: local server**

```bash
python -m http.server 8000 --directory assignment1-js-calculator
```

Open 👉 `http://localhost:8000/assignment1.html`

Press `Ctrl + C` to stop the server.

---

# ✅ Assignment 2: To-Do List

**Technology:** HTML, CSS, JavaScript

A browser-based To-Do List where you can add and manage tasks.

### ▶️ How to run

**Option A:** double-click `assignment2-todo-list/assignment2.html`

**Option B:**

```bash
python -m http.server 8000 --directory assignment2-todo-list
```

Open 👉 `http://localhost:8000/assignment2.html`

---

# 📝 Assignment 3: Form Validation

**Technology:** HTML, CSS, JavaScript

A registration form with client-side validation.

### ▶️ How to run

**Option A:** double-click `assignment3-form-validation/assignment3.html`

**Option B:**

```bash
python -m http.server 8000 --directory assignment3-form-validation
```

Open 👉 `http://localhost:8000/assignment3.html`

---

# 👤 Assignment 4: React Profile Card

**Technology:** React 18, Vite

### ▶️ How to run

```bash
cd assignment4-react-profile-card
npm install
npm run dev
```

Open 👉 `http://localhost:5173`

### 📦 Production build (optional)

```bash
npm run build
npm run preview
```

---

# 🧾 Assignment 5: Controlled React Form

**Technology:** React 19, Vite

Demonstrates controlled inputs and form state management.

### ▶️ How to run

```bash
cd assignment5
npm install
npm run dev
```

Open 👉 `http://localhost:5173`

### 📦 Production build (optional)

```bash
npm run build
npm run preview
```

---

# 🔢 Assignment 6: Counter App + REST API

**Technology:** React 19, Vite, Node.js, Express.js

This assignment has **two parts**: a React frontend and an Express backend. Use **two terminals**.

### 🖥️ Terminal 1: Frontend

```bash
cd assignment6
npm install
npm run dev
```

Open 👉 `http://localhost:5173`

### ⚙️ Terminal 2: Backend

```bash
cd assignment6
node src/server.js
```

You should see:

```text
REST API running on http://localhost:5000
```

Keep both terminals running.

### 🔗 API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Body | Description |
| :-: | --- | --- | --- |
| `GET` | `/api/users` | none | Get all users |
| `POST` | `/api/users` | `{"name":"X","email":"x@y.z"}` | Add a user |
| `PUT` | `/api/users/:id` | `{"name":"Y","email":"y@y.z"}` | Update a user |
| `DELETE` | `/api/users/:id` | none | Delete a user |

### 🧪 Quick test

```bash
curl http://localhost:5000/api/users
```

```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'
```

You can also test with **Postman**.

---

# 🛰️ Assignment 7: REST API

**Technology:** Node.js, Express.js

A standalone REST API server.

### ▶️ How to run

```bash
cd assighment7
npm install
npm start
```

You should see:

```text
REST API running on http://localhost:5000
```

> 🔍 To see the exact routes, open `assighment7/server.js` and read the route definitions. Test them in Postman at `http://localhost:5000`.

> ⚠️ Stop this server (`Ctrl + C`) before running Assignment 6, 8 or 9 backends. They all use port 5000.

---

# 📦 Assignment 8: Product Management REST API

**Technology:** Node.js, Express.js, MongoDB, Mongoose

A full CRUD API for products with validation and error handling.

### ✨ Features

* ➕ Create products
* 📋 Get all products
* 🔎 Get a product by ID
* ✏️ Update price or stock
* 🗑️ Delete a product
* 🛡️ Data validation and central error handling

### ▶️ Step-by-step

**Step 1:** Make sure MongoDB is running (local) or have your Atlas connection string ready.

**Step 2:** Go to the folder and install packages

```bash
cd assighment8
npm install
```

If packages are missing:

```bash
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

**Step 3:** Create `assighment8/.env`

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productDB
NODE_ENV=development
```

> 🔒 Never upload `.env` to GitHub. For Atlas, replace `MONGO_URI` with your Atlas string.

**Step 4:** Check `package.json` contains

```json
"type": "module",
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

**Step 5:** Start the server

```bash
npm run dev
```

You should see something like:

```text
MongoDB connected successfully
Server running on port 5000
```

### 🔗 API Endpoints

Base URL: `http://localhost:5000/api/products`

| Method | Endpoint | Description |
| :-: | --- | --- |
| `POST` | `/api/products` | Create a product |
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products/:id` | Get one product |
| `PUT` | `/api/products/:id` | Update price or stock |
| `DELETE` | `/api/products/:id` | Delete a product |

### 🧪 Test in Postman

**1. Create a product** (`POST`, Body → raw → JSON). Expected: `201 Created`

```json
{
  "name": "Laptop",
  "price": 55000,
  "category": "Electronics",
  "stock": 10
}
```

Copy the `_id` from the response. You need it below.

**2. Get all products** (`GET`). Expected: `200 OK`

**3. Get one product** (`GET`). Expected: `200 OK`

```text
http://localhost:5000/api/products/PRODUCT_ID
```

**4. Update a product** (`PUT`). Expected: `200 OK`

```json
{
  "price": 60000,
  "stock": 8
}
```

You can send just one field, for example `{ "stock": 5 }`.

**5. Delete a product** (`DELETE`). Expected: `200 OK`

```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

After deleting, fetching the same ID returns `404 Not Found`.

---

# 🌐 Assignment 9: Full-Stack MERN App

**Technology:** MongoDB, Express.js, React (Vite), Node.js, Axios

**Aim:** Connect a React frontend to an Express backend and a MongoDB database to build a complete MERN application.

**Learning objectives:** CORS configuration, HTTP requests with Axios, full-stack integration.

### 🏗️ How it works

```text
 ┌──────────────┐   Axios (GET / POST)   ┌──────────────┐   Mongoose   ┌───────────┐
 │ React (5173) │ ─────────────────────▶ │ Express(5000)│ ───────────▶ │  MongoDB  │
 │  Frontend    │ ◀───────────────────── │   Backend    │ ◀─────────── │ "users"   │
 └──────────────┘        JSON            └──────────────┘              └───────────┘
                      (CORS enabled)
```

### ✨ Features

* 🧾 Form to enter **name** and **email**
* 📥 Loads existing users from the database when the page opens (`useEffect` + Axios)
* ➕ Adds a new user with an Axios `POST` request
* ⚡ Updates the list instantly, with no page reload
* 🛡️ Backend validation (missing fields and duplicate email return `400`)
* 🌍 CORS allows the React app to talk to the backend

### ▶️ How to run (use TWO terminals)

**Before you start:** MongoDB must be running (local) or `MONGO_URI` in `backend/.env` must point to your Atlas database.

**🅰️ Terminal 1: Backend**

```bash
cd assighment9/backend
npm install
npm run dev
```

You should see:

```text
MongoDB connected
Server running on port 5000
```

**🅱️ Terminal 2: Frontend**

```bash
cd assighment9/frontend
npm install
npm run dev
```

**🌐 Open the app:** `http://localhost:5173`

### ⚙️ Backend `.env`

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern_users
```

### 🔗 API Endpoints

Base URL: `http://localhost:5000/api/users`

| Method | Endpoint | Description | Success | Errors |
| :-: | --- | --- | :-: | --- |
| `GET` | `/api/users` | Get all users (oldest first) | `200` | none |
| `POST` | `/api/users` | Create a new user | `201` | `400` missing field or duplicate email |

Example request body:

```json
{
  "name": "Ajay Borse",
  "email": "ajay@mitwpu.edu.in"
}
```

### 🖼️ Expected output

Open `http://localhost:5173`, add two users, and you should see:

```text
┌──────────────────────────────────────────┐
│     Full-Stack User Manager (MERN)       │
│                                          │
│  [ Enter Name                          ] │
│  [ Enter Email                         ] │
│  [            Add User                 ] │
│  ──────────────────────────────────────  │
│  Registered Users (2)                    │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │ Samradhni Deshmukh                 │  │
│  │ samradhni@gmail.com                │  │
│  └────────────────────────────────────┘  │
│  ┌────────────────────────────────────┐  │
│  │ Ajay Borse                         │  │
│  │ ajay@mitwpu.edu.in                 │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

📸 **For submission:** add two users, then take a screenshot showing **"Registered Users (2)"**.

---

# 🛠️ Troubleshooting

### ❌ 1. `npm error enoent ... package.json`

**Cause:** You ran `npm` in the wrong folder (for example the repository root).
**Fix:** `cd` into the correct assignment folder first.

```bash
cd assighment9/backend
npm run dev
```

### ❌ 2. `Missing script: "dev"`

```bash
npm run                                   # list available scripts
npm pkg set scripts.dev="nodemon server.js"
npm run dev
```

### ❌ 3. `Cannot use import statement outside a module`

Add this to the `package.json` of that project:

```json
"type": "module"
```

### ❌ 4. `ERR_MODULE_NOT_FOUND`

Check that:

* the imported file exists,
* the filename and capitalization are correct (`Product.js` is not `product.js`),
* the relative path is correct,
* you ran `npm install`.

### ❌ 5. MongoDB connection error

* Is MongoDB running (local), or is your Atlas IP allowed (cloud)?
* Is `MONGO_URI` correct in `.env`?
* Is the `.env` file inside the correct backend folder?

### ❌ 6. Port 5000 already in use (`EADDRINUSE`)

Another backend is still running. Stop it with `Ctrl + C`, or find and stop the process on Windows:

```powershell
netstat -ano | findstr :5000
taskkill /PID YOUR_PID /F
```

Replace `YOUR_PID` with the number in the **last column**. Confirm the process is the one you want to stop first.

### ❌ 7. Vite port 5173 busy

```bash
npm run dev -- --port 5174
```

> If you change the frontend port in Assignment 9, update the allowed origin in the backend CORS settings to match.

### ❌ 8. CORS error in the browser console (Assignment 9)

* Make sure the backend is running.
* Make sure the CORS origin in `backend/server.js` is exactly `http://localhost:5173`.
* Restart the backend after changing it.

### ❌ 9. Frontend shows no users / "Network Error"

* Check that the backend terminal shows `Server running on port 5000`.
* Check that Axios calls `http://localhost:5000/api/users`.
* Open `http://localhost:5000/api/users` in your browser. It should return JSON.

### ❌ 10. PowerShell: moving between folders

Assignments are **sibling folders**, not nested.

```powershell
cd ..
cd assighment8
```

### 💡 Frontend + backend together

Whenever an assignment has both, use **two terminals**: backend in one, frontend in the other. Keep both open while using the app.

---

## 🎯 Conclusion

These nine assignments take you step by step from plain JavaScript to a complete MERN stack application:

**JavaScript → Forms → React → REST APIs → MongoDB → Full-Stack Integration** 🚀

> Run every assignment from **its own folder**, install its dependencies, and start only **one backend at a time**.

<div align="center">

### ⭐ Happy Coding! ⭐

</div>
