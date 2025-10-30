import express from "express";
import CartItem from "../models/cartItem.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const cart = await CartItem.find().populate("product");
  const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  res.json({ cart, total });
});

router.post("/", async (req, res) => {
  const { productId } = req.body;
  let item = await CartItem.findOne({ product: productId });

  if (item) item.qty++;
  else item = await CartItem.create({ product: productId, qty: 1 });

  await item.save();
  res.json(item);
});

router.delete("/:id", async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
