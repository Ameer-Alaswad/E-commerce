import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fillingRouter from "./routes/fillingRoute.js";
import productsRouter from "./routes/productsRoute.js";
import userRouter from "./routes/usersRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import path from "path";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });
app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.use("/api/seed", fillingRouter);
app.use("/api/product", productsRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is connected at http://localhost:${port}`);
});
// "build": "cd backend && npm install && ../frontend && npm install && npm run build",
