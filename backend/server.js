import express from "express";
import products from "./assets/data.js";
const app = express();

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/product/label/:label", (req, res) => {
  const product = products.find(
    (product) => product.label === req.params.label
  );
  if (product) return res.status(200).send([product]);
  return res.status(404).send({ message: "product does not exist" });
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is connected at http://localhost:${port}`);
});
