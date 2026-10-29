import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// POST: Create a product
router.post("/", async (req, res, next) => {
try {
const { name, price, category, stock } = req.body;

```
if (
  !name ||
  price === undefined ||
  !category ||
  stock === undefined
) {
  res.status(400);
  throw new Error("Please provide all required fields");
}

const product = await Product.create({
  name,
  price,
  category,
  stock,
});

res.status(201).json({
  success: true,
  data: product,
});
```

} catch (error) {
next(error);
}
});

// GET: Get all products
router.get("/", async (req, res, next) => {
try {
const products = await Product.find();

```
res.status(200).json({
  success: true,
  count: products.length,
  data: products,
});
```

} catch (error) {
next(error);
}
});

// GET: Get one product by ID
router.get("/:id", async (req, res, next) => {
try {
const product = await Product.findById(req.params.id);

```
if (!product) {
  res.status(404);
  throw new Error("Product not found");
}

res.status(200).json({
  success: true,
  data: product,
});
```

} catch (error) {
next(error);
}
});

// PUT: Update price or stock
router.put("/:id", async (req, res, next) => {
try {
const { price, stock } = req.body;

```
if (price === undefined && stock === undefined) {
  res.status(400);
  throw new Error("Provide price or stock to update");
}

const updates = {};

if (price !== undefined) updates.price = price;
if (stock !== undefined) updates.stock = stock;

const product = await Product.findByIdAndUpdate(
  req.params.id,
  updates,
  { new: true, runValidators: true }
);

if (!product) {
  res.status(404);
  throw new Error("Product not found");
}

res.status(200).json({
  success: true,
  data: product,
});
```

} catch (error) {
next(error);
}
});

// DELETE: Delete a product
router.delete("/:id", async (req, res, next) => {
try {
const product = await Product.findByIdAndDelete(req.params.id);

```
if (!product) {
  res.status(404);
  throw new Error("Product not found");
}

res.status(200).json({
  success: true,
  message: "Product deleted successfully",
});
```

} catch (error) {
next(error);
}
});

export default router;
