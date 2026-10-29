
const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let users = [
  { id: 1, name: "Ajay Borse", email: "ajay@example.com" },
  { id: 2, name: "Saloni Jadhav", email: "saloni@example.com" },
];

// GET: Fetch all users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// POST: Create a new user
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Name and email are required fields." });
  }

  const newId =
    users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

  const newUser = { id: newId, name, email };

  users.push(newUser);

  res.status(201).json(newUser);
});

// PUT: Update an existing user
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found." });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
  };

  res.status(200).json(users[userIndex]);
});

// DELETE: Remove a user
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found." });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.status(200).json({
    message: "User deleted successfully.",
    user: deletedUser[0],
  });
});

app.listen(PORT, () => {
  console.log(`REST API running on http://localhost:${PORT}`);
});
