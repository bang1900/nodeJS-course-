// מגישים סהר ובנימין
// 48/6
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const { products } = require("./data.js");

app.get("/products/:productPrice", (req, res) => {
  const productPrice = req.params.productPrice;
  const filteredProducts = products.filter(
    (products) => products.price >= productPrice
  );
  res.json(filteredProducts);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
