import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productScheme = new Schema(
  {
    name: { type: String, required: true, unique: true },
    label: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = model("Products", productScheme);

export default Product;
