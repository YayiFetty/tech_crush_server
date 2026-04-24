const express = require("express");
const app = express();

const port = 3001;

const users = [
  { id: 1, name: "yayi", email: "ya@gmail.com" },
  { id: 2, name: "nas", email: "nas@gmail.com" },
];

express.json();
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

app.post("/users/:id", (req, res) => {
  const { name, email } = req.body;
  //validate
  if (!name || email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  //new user
  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
  };
  users.push(newUser);

  //201 creaqted
  res.status(201).json(newUser);
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
