const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let products = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const { name, quantity } = req.body;
  const newProduct = {
    id: uuidv4(),
    name,
    quantity: Number(quantity)
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  products = products.map(product =>
    product.id === id
      ? { ...product, quantity: Number(quantity) }
      : product
  );
  res.json({ message: "Updated successfully" });
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter(product => product.id !== id);
  res.json({ message: "Deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
