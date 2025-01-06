// מגישים סהר ובנימין
// 48/6
const express = require("express"); // Importing the Express framework
const app = express(); // Creating an Express application
const port = process.env.PORT || 3000; // Setting the port to an environment variable or defaulting to 3000

const users = require("./users.json"); // Importing the users data from a JSON file

// A. Endpoint to get all users
app.get("/api/users", (req, res) => {
  res.json(users); // Respond with the full list of users in JSON format
});

// C. Filtering users by age range
// Important: This endpoint is placed before B to avoid conflict with dynamic routes like '/api/users/:id'
app.get("/api/users/filter", (req, res) => {
  const minAge = parseInt(req.query.minAge, 10); // Parse 'minAge' from the query parameters
  const maxAge = parseInt(req.query.maxAge, 10); // Parse 'maxAge' from the query parameters

  const filteredUsers = users.filter(
    (user) => user.age >= minAge && user.age <= maxAge // Filter users within the specified age range
  );

  // If no users are found in the specified age range, respond with a 404 status and a message
  if (filteredUsers.length === 0) {
    return res
      .status(404)
      .json({ message: "No users found in the specified age range." });
  }

  res.json(filteredUsers); // Respond with the filtered list of users
});

// B. Endpoint to get a user by ID
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10); // Parse 'id' from the route parameter
  const user = users.find((u) => u.id === userId); // Find the user with the matching ID
  if (!user) {
    return res.status(404).json({ error: "User not found" }); // If user is not found, respond with a 404 status and error message
  }

  res.json(user); // Respond with the user details
});

// D. Endpoint to display user details in HTML format
app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10); // Parse 'id' from the route parameter
  const user = users.find((u) => u.id === userId); // Find the user with the matching ID
  if (!user) {
    return res.status(404).send("<h1>User not found</h1>"); // If user is not found, respond with a 404 status and an HTML error message
  }

  // Create an HTML response with user details
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

  res.send(userHtml); // Send the HTML response
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Log a message indicating the server has started
});
