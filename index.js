const express = require("express");
const app = express();

const port = 3001;

const users = [
  { id: 1, name: "yayi", email: "ya@gmail.com" },
  { id: 2, name: "nas", email: "nas@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("server is running");
});
//get all users
app.get("/users", (req, res) => {
  return res.status(200).json(users);
});
//get a single user by id
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
