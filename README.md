<<<<<<< HEAD
# JS_Assignment

## Full Stack Development — Lab Assignments 1–8

**Student:** Tolnure Swapnaj Santosh
**PRN:** 1272250516
**Program:** SY MCA — Semester III

This repository contains eight lab assignments covering JavaScript fundamentals, HTML, React, form validation, REST APIs, Express.js, Node.js, and MongoDB.

---

## Table of Contents

* [Prerequisites](#prerequisites)
* [Repository Structure](#repository-structure)
* [Assignment 1 — JavaScript Calculator](#assignment-1--javascript-calculator)
* [Assignment 2 — To-Do List](#assignment-2--to-do-list)
* [Assignment 3 — Form Validation](#assignment-3--form-validation)
* [Assignment 4 — React Profile Card](#assignment-4--react-profile-card)
* [Assignment 5 — Controlled React Form](#assignment-5--controlled-react-form)
* [Assignment 6 — Counter App and REST API](#assignment-6--counter-app-and-rest-api)
* [Assignment 7 — REST API](#assignment-7--rest-api)
* [Assignment 8 — Product Management REST API](#assignment-8--product-management-rest-api)
* [Troubleshooting](#troubleshooting)

---
=======
<div align="center">
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

# 🚀 JS_Assignment

<<<<<<< HEAD
Install the following tools before running the assignments.

* **Node.js:** Version 22 or later recommended.
* **npm:** Installed with Node.js.
* **Web browser:** Chrome, Microsoft Edge, or Firefox.
* **Visual Studio Code:** Recommended editor.
* **Postman:** Recommended for testing REST APIs.
* **MongoDB:** Required for Assignment 8.
* **Python 3:** Optional; useful for serving static HTML assignments.

Verify your Node.js and npm installations:
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
node --version
npm --version
<<<<<<< HEAD
```

Verify Python if you intend to use its HTTP server:

```bash
python --version
```

The original assignments were verified with Node.js v22.23.3 and npm 10.9.9. Your installed versions may differ.

---

## Repository Structure

The repository is organized into separate folders for each assignment.

```text
JS_Assignment/
│
├── assignment1-js-calculator/
│   └── assignment1.html
│
├── assignment2-todo-list/
│   └── assignment2.html
│
├── assignment3-form-validation/
│   └── assignment3.html
│
├── assignment4-react-profile-card/
│
├── assignment5/
│
├── assignment6/
│   └── src/
│       └── server.js
│
├── assighment7/
│   └── server.js
│
├── assighment8/
│   ├── config/
│   │   └── db.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37
│   ├── .env
│   ├── package.json
│   └── server.js
│
<<<<<<< HEAD
└── README.md
```

**Note:** The folder names shown for Assignments 1–6 are based on the original assignment instructions. The names `assighment7` and `assighment8` match the folders used in the current local project. Adjust the names in this document if your actual repository uses different names.

---

# Assignment 1 — JavaScript Calculator

**Technology:** HTML, CSS, JavaScript

A simple calculator implemented using HTML, CSS, and JavaScript.

### How to Run

**Option 1: Open directly**

1. Navigate to `assignment1-js-calculator`.
2. Locate `assignment1.html`.
3. Double-click the file.
4. The calculator opens in your default browser.

**Option 2: Run using a local HTTP server**

Open a terminal in the repository root:
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
python -m http.server 8000 --directory assignment1-js-calculator
```

<<<<<<< HEAD
Open your browser and visit:

```text
http://localhost:8000/assignment1.html
```

Press `Ctrl + C` in the terminal to stop the server.

---

# Assignment 2 — To-Do List

**Technology:** HTML, CSS, JavaScript

A browser-based To-Do List application.

### How to Run

Navigate to the repository root and execute:
=======
Open 👉 `http://localhost:8000/assignment1.html`

Press `Ctrl + C` to stop the server.

---

# ✅ Assignment 2: To-Do List

**Technology:** HTML, CSS, JavaScript

A browser-based To-Do List where you can add and manage tasks.

### ▶️ How to run

**Option A:** double-click `assignment2-todo-list/assignment2.html`

**Option B:**
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
python -m http.server 8000 --directory assignment2-todo-list
```

<<<<<<< HEAD
Open:

```text
http://localhost:8000/assignment2.html
```

Alternatively, open `assignment2-todo-list/assignment2.html` directly in your browser.

---

# Assignment 3 — Form Validation

**Technology:** HTML, CSS, JavaScript

A user registration form demonstrating client-side form validation.

### How to Run

From the repository root, execute:
=======
Open 👉 `http://localhost:8000/assignment2.html`

---

# 📝 Assignment 3: Form Validation

**Technology:** HTML, CSS, JavaScript

A registration form with client-side validation.

### ▶️ How to run

**Option A:** double-click `assignment3-form-validation/assignment3.html`

**Option B:**
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
python -m http.server 8000 --directory assignment3-form-validation
```

<<<<<<< HEAD
Open:

```text
http://localhost:8000/assignment3.html
```

Alternatively, open `assignment3-form-validation/assignment3.html` directly in your browser.

---

# Assignment 4 — React Profile Card

**Technology:** React 18, Vite

A React application demonstrating a profile card interface.

### How to Run

Open a terminal in the repository root:

```bash
cd assignment4-react-profile-card
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL displayed in your terminal. The default Vite development URL is usually:

```text
http://localhost:5173
```

### Production Build

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Use the URL displayed in the terminal to access the preview.

---

# Assignment 5 — Controlled React Form

**Technology:** React 19, Vite

A React application demonstrating controlled form inputs and form state management.

### How to Run

Navigate to the assignment folder:

```bash
cd assignment5
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL displayed in the terminal, usually:

```text
http://localhost:5173
```

### Production Build
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
npm run build
npm run preview
```

---

<<<<<<< HEAD
# Assignment 6 — Counter App and REST API

**Technology:** React 19, Vite, Node.js, Express.js

This assignment contains a frontend counter application and a backend REST API for managing users.

## Part A: Run the Frontend

Open a terminal in the repository root:

```bash
cd assignment6
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Open the URL displayed in the terminal, usually:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

## Part B: Run the Backend

Open a **second terminal** in the repository root.

Navigate to Assignment 6:

```bash
cd assignment6
```

Start the Express API:

```bash
node src/server.js
```

The expected startup message is:

```text
REST API running on http://localhost:5000
```

Keep the backend running while using the frontend.

## API Endpoints

Base URL:

```text
http://localhost:5000
```

| Method | Endpoint         | Request Body                   | Description     |
| ------ | ---------------- | ------------------------------ | --------------- |
| GET    | `/api/users`     | None                           | Fetch all users |
| POST   | `/api/users`     | `{"name":"X","email":"x@y.z"}` | Add a user      |
| PUT    | `/api/users/:id` | `{"name":"Y","email":"y@y.z"}` | Update a user   |
| DELETE | `/api/users/:id` | None                           | Delete a user   |

### Test the API

Fetch all users:
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
curl http://localhost:5000/api/users
```

<<<<<<< HEAD
Create a user:

=======
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'
```

<<<<<<< HEAD
You can also test these endpoints using Postman.

---

# Assignment 7 — REST API

**Technology:** Node.js, Express.js

This assignment contains a standalone REST API server.

## How to Run

Open a terminal in the repository root:

```bash
cd assighment7
```

Start the server:

```bash
=======
You can also test with **Postman**.

---

# 🛰️ Assignment 7: REST API

**Technology:** Node.js, Express.js

A standalone REST API server.

### ▶️ How to run

```bash
cd assighment7
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37
npm install
npm start
```

<<<<<<< HEAD
The expected startup message is:
=======
You should see:
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```text
REST API running on http://localhost:5000
```

<<<<<<< HEAD
Keep the terminal open while testing the API.

## Testing

The server runs on:

```text
http://localhost:5000
```

To determine the available endpoints and their request formats, inspect the route definitions in this assignment's source code.

The exact endpoint list for Assignment 7 is not included in this README because the route definitions have not been documented here.

---

# Assignment 8 — Product Management REST API

**Technology:** Node.js, Express.js, MongoDB, Mongoose

This assignment implements a Product Management REST API with CRUD operations.

The API supports:

* Creating products.
* Retrieving all products.
* Retrieving a product by ID.
* Updating a product's price or stock.
* Deleting a product.
* Validating product data.
* Handling API errors.

## Step 1: Open the Assignment Folder

From the repository root:

```powershell
cd assighment8
```

Ensure your terminal is inside the `assighment8` directory before running the remaining commands.

## Step 2: Install Dependencies

Run:

```bash
npm install
```

If the required packages are not installed, run:
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

<<<<<<< HEAD
## Step 3: Configure MongoDB

MongoDB must be installed and running locally, or you must have a valid MongoDB Atlas connection string.

Create a `.env` file in the Assignment 8 root directory:
=======
**Step 3:** Create `assighment8/.env`
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productDB
NODE_ENV=development
```

<<<<<<< HEAD
For MongoDB Atlas, replace the local `MONGO_URI` with your Atlas connection string.

**Important:** Keep `.env` private. Do not commit database credentials or secrets to GitHub.

## Step 4: Check the Project Structure

Verify that the following files exist:

```text
assighment8/
│
├── config/
│   └── db.js
│
├── middlewares/
│   └── errorHandler.js
│
├── models/
│   └── Product.js
│
├── routes/
│   └── productRoutes.js
│
├── .env
├── package.json
└── server.js
```

The project uses ES modules. Ensure `package.json` contains:

```json
"type": "module"
```

The `scripts` section should include:

```json
=======
> 🔒 Never upload `.env` to GitHub. For Atlas, replace `MONGO_URI` with your Atlas string.

**Step 4:** Check `package.json` contains

```json
"type": "module",
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

<<<<<<< HEAD
If these scripts are already present, do not add duplicate entries.

## Step 5: Start the API

For development:
=======
**Step 5:** Start the server
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
npm run dev
```

<<<<<<< HEAD
Alternatively:

```bash
npm start
```

If everything is configured correctly, you should see messages similar to:
=======
You should see something like:
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```text
MongoDB connected successfully
Server running on port 5000
```

<<<<<<< HEAD
The exact MongoDB connection message may vary depending on the implementation of `config/db.js`.

## Step 6: Test the API

Base URL:

```text
http://localhost:5000/api/products
```

### API Endpoints

| Method | Endpoint            | Description                   |
| ------ | ------------------- | ----------------------------- |
| POST   | `/api/products`     | Create a product              |
| GET    | `/api/products`     | Retrieve all products         |
| GET    | `/api/products/:id` | Retrieve a product by ID      |
| PUT    | `/api/products/:id` | Update product price or stock |
| DELETE | `/api/products/:id` | Delete a product              |

### 1. Create a Product

**Method:** POST

**URL:**

```text
http://localhost:5000/api/products
```

Select **Body → raw → JSON** in Postman.

Request body:
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```json
{
  "name": "Laptop",
  "price": 55000,
  "category": "Electronics",
  "stock": 10
}
```

<<<<<<< HEAD
Expected status:

```text
201 Created
```

The response includes the created product and its MongoDB-generated `_id`.

Save that ID for the subsequent requests.

### 2. Get All Products

**Method:** GET

**URL:**

```text
http://localhost:5000/api/products
```

Expected status:

```text
200 OK
```

The response contains the products stored in MongoDB.

### 3. Get a Product by ID

**Method:** GET

**URL:**
=======
Copy the `_id` from the response. You need it below.

**2. Get all products** (`GET`). Expected: `200 OK`

**3. Get one product** (`GET`). Expected: `200 OK`
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```text
http://localhost:5000/api/products/PRODUCT_ID
```

<<<<<<< HEAD
Replace `PRODUCT_ID` with the actual `_id` returned when creating the product.

Expected status:

```text
200 OK
```

### 4. Update a Product

**Method:** PUT

**URL:**

```text
http://localhost:5000/api/products/PRODUCT_ID
```

Request body:
=======
**4. Update a product** (`PUT`). Expected: `200 OK`
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```json
{
  "price": 60000,
  "stock": 8
}
```

<<<<<<< HEAD
Replace `PRODUCT_ID` with your actual product ID.

Expected status:

```text
200 OK
```

You can update either field independently. For example:

```json
{
  "stock": 5
}
```

### 5. Delete a Product

**Method:** DELETE

**URL:**

```text
http://localhost:5000/api/products/PRODUCT_ID
```

Expected response:
=======
You can send just one field, for example `{ "stock": 5 }`.

**5. Delete a product** (`DELETE`). Expected: `200 OK`
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

<<<<<<< HEAD
Expected status:

```text
200 OK
```

After deletion, retrieving the same product ID should return a `404 Not Found` response.

---

# Troubleshooting

## 1. `npm` Command Not Found

Verify Node.js and npm:

```bash
node --version
npm --version
```

If either command is unavailable, install Node.js and reopen the terminal.

## 2. Missing `dev` Script

If you see:

```text
npm error Missing script: "dev"
```

Inspect the available scripts:

```bash
npm run
```

For Assignment 8, add the development script if it is missing:

```bash
npm pkg set scripts.dev="nodemon server.js"
```

Then run:

```bash
npm run dev
```

## 3. `Cannot Use Import Statement Outside a Module`

If your code uses `import` and `export`, ensure the relevant `package.json` contains:
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```json
"type": "module"
```

<<<<<<< HEAD
## 4. `ERR_MODULE_NOT_FOUND`

This error usually means a required module or local file cannot be found.

Check:

* Whether the imported file exists.
* Whether the filename and capitalization are correct.
* Whether the relative import path is correct.
* Whether the required npm packages are installed.

For example:

```javascript
import Product from "../models/Product.js";
```

This import requires the `models/Product.js` file to exist at the expected location.

## 5. MongoDB Connection Error

For Assignment 8, verify that:

* MongoDB is running.
* `MONGO_URI` is correct.
* The `.env` file is in the assignment root.
* The database connection code loads the environment variables before connecting.

## 6. Port 5000 Already in Use

If you see an `EADDRINUSE` error, another process is using port 5000.

On Windows, identify the process:

```powershell
netstat -ano | findstr :5000
```

The last column contains the process ID (PID).

To stop that process, first confirm that it belongs to the application you intend to stop. Then execute:

```powershell
taskkill /PID YOUR_PID /F
```

Replace `YOUR_PID` with the actual PID.

Alternatively, configure the application to use another available port.

## 7. Vite Port Conflict

Vite usually starts on port 5173. If the port is busy, Vite may select another port.

To specify port 5174:
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```bash
npm run dev -- --port 5174
```

<<<<<<< HEAD
To require that exact port:

```bash
npm run dev -- --port 5174 --strictPort
```

## 8. PowerShell Directory Navigation

Assignments 7 and 8 are separate folders.

If you are currently inside `assighment7`, run:
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37

```powershell
cd ..
cd assighment8
```

<<<<<<< HEAD
Do not run `cd assighment8` directly while inside `assighment7`, because Assignment 8 is not a subfolder of Assignment 7.

## 9. Run Frontend and Backend Together

When an assignment has both a frontend and a backend, use two separate terminals.

* Terminal 1: Start the backend.
* Terminal 2: Start the frontend.

Keep both running while using the application.

For assignments using port 5000, stop the previous server if it conflicts with the new one.

---

## Conclusion

These eight assignments demonstrate fundamental frontend development, React applications, JavaScript programming, backend development, REST API implementation, and database integration.

Run each assignment from its own directory and install its dependencies before starting the application.

**Happy Coding!**
=======
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
>>>>>>> dab68195ab95ad0de7af0a8b882a293502964f37
