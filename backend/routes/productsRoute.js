import express from "express";
import Product from "../models/productModel.js";
const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
  const createdProducts = await Product.find();
  res.send(createdProducts);
});

productsRouter.get("/label/:label", async (req, res) => {
  const product = await Product.findOne({ label: req.params.label });

  if (product) return res.status(200).send([product]);

  return res.status(404).send({ message: "product does not exist" });
});

productsRouter.get("/name/:name", async (req, res) => {
  const product = await Product.findOne({ name: req.params.name });
  if (product) return res.status(200).send([product]);
  return res.status(404).send({ message: "product does not exist" });
});

export default productsRouter;
