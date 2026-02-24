const express = require("express");

const app = express();
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/products", (req, res) => {
    res.status(200).json(products);
  res.send("Express server is running");
});


app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) {
    return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
    }
);

app.get("/products/category/:category", (req, res) => {
    const category = req.params.category;
    const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    if (filteredProducts.length === 0) {
    return res.status(404).json({ message: "No products found in this category" });
    }
    res.status(200).json(filteredProducts);
    });



app.post("/products", (req, res) => {
  const newproducts = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products.push(newproducts);

  res.status(201).json({
    message: "products created",
    products: newproducts
  });
});

app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Products not found" });
  }
  

  products[index] = {
    id: productId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  res.status(200).json({
    message: "Products replaced",
    products: products[index]
  });
});


app.put("/products/:id/stock", (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Products not found" });
  }
  products[index].stock = req.body.stock;
  res.status(200).json({
    message: "Products stock updated",
    products: products[index]
  });
});

app.put("/products/:id/price", (req,res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Products not found" });
  }
  products[index].price = req.body.price;
  res.status(200).json({
    message: "Products stock updated",
    products: products[index]
  });
});




app.listen(3000, () => {
  console.log("Server started on port 3000");
});