//מגישים- סהר ובן
//כיתה 48.6

// Importing required modules
const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
const path = require("path");

// Defining file paths for products and users data
const productFilePath = path.join(__dirname, "./json/products.json");
const usersFilePath = path.join(__dirname, "./json/users.json");

// Function to read and parse the users JSON file
const readUsersFile = () => {
  const userData = fs.readFileSync(usersFilePath, "utf-8");
  return JSON.parse(userData);
};

// Route to get all users
// Route to get all users or filter by age
app.get("/users", (req, res) => {
  const users = readUsersFile();

  // Check if the 'age' query parameter exists
  const ageQuery = req.query.age;

  if (ageQuery) {
    const ageNum = Number(ageQuery);
    if (isNaN(ageNum)) {
      return res.status(400).send("Invalid age parameter");
    }
    // Filter users who are older than the specified age
    const filteredUsers = users.filter((user) => user.age > ageNum);
    return res.json(filteredUsers);
  }

  // If no 'age' parameter is provided, return all users
  res.json(users);
});

// Route to get users by age
app.get("/users/:age", (req, res) => {
  const { userAge } = req.params;
  const products = readUsersFile();
  const ageNum = Number(userAge);

  if (!user) {
    return res.status(404).send("User Does Not Exist");
  }
  res.json(user);
});

// Function to read and parse the products JSON file
const readProductFile = () => {
  const data = fs.readFileSync(productFilePath, "utf-8");
  return JSON.parse(data);
};

// Route to get all products
app.get("/products", (req, res) => {
  const products = readProductFile();
  res.json(products);
});

// Route to get a product by its ID
app.get("/products/:proID", (req, res) => {
  const { proID } = req.params;
  const products = readProductFile();
  const product = products.find((product) => product.id === Number(proID));

  if (!product) {
    return res.status(404).send("Product Does Not Exist");
  }
  res.json(product);
});

// Serve static files from the "assets" folder
app.use(express.static(path.join(__dirname, "assets")));

// Middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send("<h1>File Not Found</h1>");
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
