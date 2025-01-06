// מגישים סהר ובנימין
// 48/6
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const users = require("./users.json");

// A
app.get("/api/users", (req, res) => {
  res.json(users);
});

// C
// importent that C is before B because if B is first then it will put (api/users/:id) in id -> filter
// the solustion is to be carful what come first
app.get("/api/users/filter", (req, res) => {
  const minAge = parseInt(req.query.minAge, 10);
  const maxAge = parseInt(req.query.maxAge, 10);

  const filteredUsers = users.filter(
    (user) => user.age >= minAge && user.age <= maxAge
  );

  if (filteredUsers.length === 0) {
    return res
      .status(404)
      .json({ message: "No users found in the specified age range." });
  }

  res.json(filteredUsers);
});

//B
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

//D

app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).send("<h1>User not found</h1>");
  }
  const userHtml = `
    <html>
      <head>
        <title>User Details</title>
      </head>
      <body>
        <h1>User Details</h1>
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
      </body>
    </html>
  `;

  res.send(userHtml);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
