import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.post("/api/checkout", (req, res) => {
  res.json({
    success: true,
    orderId: "ORD" + Math.floor(Math.random() * 99999),
    timestamp: new Date(),
  });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`✅ Backend running on port ${process.env.PORT || 5000}`)
);
