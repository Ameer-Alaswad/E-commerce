import express from "express";
import Product from "../models/productModel.js";
import { products, users } from "../assets/data.js";
import User from "../models/userModel.js";
const fillingRouter = express.Router();

fillingRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(products);
  await User.remove({});
  const createdUsers = await User.insertMany(users);
  res.send({ createdProducts, createdUsers });
});

export default fillingRouter;
