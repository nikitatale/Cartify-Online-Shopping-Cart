import mongoose from "mongoose";
import Product from "./models/products.js";

mongoose.connect("mongodb://127.0.0.1:27017/myshop")
.then(async () => {
  await Product.deleteMany(); // sab clear
  await Product.insertMany([
    {
      name: "iPhone 15",
      price: 79999,
      description: "Flagship Apple smartphone.",
      image: "iphone.jpg"
    },
    {
      name: "AirPods Pro",
      price: 24999,
      description: "Noise cancelling wireless earbuds.",
      image: "airpods.jpg"
    }
  ]);

  console.log("Products Inserted ✅");
  process.exit();
});
