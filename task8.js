// מגישים סהר ובנימין
// 48/6

const express = require("express"); // Importing the Express framework
const app = express(); // Creating an Express application
const port = process.env.PORT || 3000; // Setting the port to an environment variable or defaulting to 3000

const { products } = require("./data.js"); // Importing the products data from the "data.js" file

// Endpoint to filter products by price
app.get("/products/:productPrice", (req, res) => {
  const productPrice = req.params.productPrice; // Extract the price parameter from the route
  const filteredProducts = products.filter(
    (product) => product.price >= productPrice // Filter products with a price greater than or equal to the given price
  );

  res.json(filteredProducts); // Respond with the filtered list of products in JSON format
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Log a message indicating the server has started
});
