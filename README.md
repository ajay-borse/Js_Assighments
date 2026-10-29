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

## Prerequisites

Install the following tools before running the assignments.

* **Node.js:** Version 22 or later recommended.
* **npm:** Installed with Node.js.
* **Web browser:** Chrome, Microsoft Edge, or Firefox.
* **Visual Studio Code:** Recommended editor.
* **Postman:** Recommended for testing REST APIs.
* **MongoDB:** Required for Assignment 8.
* **Python 3:** Optional; useful for serving static HTML assignments.

Verify your Node.js and npm installations:

```bash
node --version
npm --version
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
│   ├── .env
│   ├── package.json
│   └── server.js
│
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

```bash
python -m http.server 8000 --directory assignment1-js-calculator
```

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

```bash
python -m http.server 8000 --directory assignment2-todo-list
```

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

```bash
python -m http.server 8000 --directory assignment3-form-validation
```

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

```bash
npm run build
npm run preview
```

---

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

```bash
curl http://localhost:5000/api/users
```

Create a user:

```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'
```

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
npm install
npm start
```

The expected startup message is:

```text
REST API running on http://localhost:5000
```

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

```bash
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

## Step 3: Configure MongoDB

MongoDB must be installed and running locally, or you must have a valid MongoDB Atlas connection string.

Create a `.env` file in the Assignment 8 root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productDB
NODE_ENV=development
```

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
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

If these scripts are already present, do not add duplicate entries.

## Step 5: Start the API

For development:

```bash
npm run dev
```

Alternatively:

```bash
npm start
```

If everything is configured correctly, you should see messages similar to:

```text
MongoDB connected successfully
Server running on port 5000
```

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

```json
{
  "name": "Laptop",
  "price": 55000,
  "category": "Electronics",
  "stock": 10
}
```

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

```text
http://localhost:5000/api/products/PRODUCT_ID
```

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

```json
{
  "price": 60000,
  "stock": 8
}
```

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

```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

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

```json
"type": "module"
```

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

```bash
npm run dev -- --port 5174
```

To require that exact port:

```bash
npm run dev -- --port 5174 --strictPort
```

## 8. PowerShell Directory Navigation

Assignments 7 and 8 are separate folders.

If you are currently inside `assighment7`, run:

```powershell
cd ..
cd assighment8
```

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
