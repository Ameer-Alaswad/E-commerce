import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post("/", isAuth, async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    totalItemsPrice,
    shippingPrice,
    taxes,
    totalPrice,
  } = req.body;
  const newOrder = new Order({
    orderItems: orderItems,
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

orderRouter.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: "Order was not found" });
  }
});

orderRouter.put("/:id/pay", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.email_address,
    };
    const updatedOrder = await order.save();
    res.send({ message: "Order Paid", order: updatedOrder });
  } else {
    res.status(404).send({ message: "Order Not found" });
  }
});

export default orderRouter;
