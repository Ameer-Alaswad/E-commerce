import express from "express";
import products from "./assets/data.js";
const app = express();

app.get("/api/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is connected at http://localhost:${port}`);
});
