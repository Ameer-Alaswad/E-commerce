import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post("/", isAuth, async (req, res) => {
  const {
    cartItems,
    shippingAddress,
    paymentMethod,
    totalItemsPrice,
    shippingPrice,
    taxes,
    totalPrice,
  } = req.body;
  console.log("address", req.body);
  const newOrder = new Order({
    orderItems: cartItems,
    shippingAddress,
    paymentMethod,
    itemsPrice: totalItemsPrice,
    shippingPrice,
    taxPrice: taxes,
    totalPrice,
    user: req.user._id,
  });
  const order = await newOrder.save();
  res.status(201).send({ message: "New Order Created", order });
});
export default orderRouter;
