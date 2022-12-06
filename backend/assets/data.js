import bcrypt from "bcryptjs";
export const users = [
  {
    name: "Ameer",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Ghaith",
    email: "Ghaith@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];

export const products = [
  {
    name: "Nike Slim shirt",
    label: "nike-slim-shirt",
    category: "Shirts",
    image: "/images/p1.jpg", // 679px × 829px
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description: "high quality shirt",
  },
  {
    name: "Adidas Fit Shirt",
    label: "adidas-fit-shirt",
    category: "Shirts",
    image: "/images/p2.jpg",
    price: 250,
    countInStock: 20,
    brand: "Adidas",
    rating: 4.0,
    numReviews: 10,
    description: "high quality product",
  },
  {
    name: "Nike Slim Pant",
    label: "nike-slim-pant",
    category: "Pants",
    image: "/images/p3.png",
    price: 25,
    countInStock: 15,
    brand: "Nike",
    rating: 2.5,
    numReviews: 14,
    description: "high quality product",
  },
  {
    name: "Adidas Fit Pant",
    label: "adidas-fit-pant",
    category: "Pants",
    image: "/images/p4.jpg",
    price: 65,
    countInStock: 5,
    brand: "Puma",
    rating: 4.5,
    numReviews: 10,
    description: "high quality product",
  },
];
