import ctrlWrapper from "../helpers/ctrlWrapper.js";
import Pizza from "../models/pizza.js";

async function getAll(req, res) {
  const { category, sort, order } = req.query;

  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }

  const orderNumber = order === "asc" ? 1 : -1;

  if (category === "all") {
    const pizzas = await Pizza.find().sort({ [sort]: orderNumber });
    return res.json(pizzas);
  }

  const pizzas = await Pizza.find({ category }).sort({
    [sort]: orderNumber,
  });
  return res.json(pizzas);
}

export default {
  getAll: ctrlWrapper(getAll),
};

export const newT = [
  {
    _id: "65c4eb8cbc8f8de0b9ab94a4",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    title: "Paperoni",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: ["meat", "spicy"],
    rating: 4,
  },
  {
    _id: "65c4eb8cbc8f8de0b9ab94a6",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    title: "Barbeque",
    types: [0],
    sizes: [26, 40],
    price: 295,
    category: ["grilled", "meat"],
    rating: 4,
  },
  {
    _id: "65c4eb8cbc8f8de0b9ab94a7",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
    title: "New chicken",
    types: [1],
    sizes: [26, 30, 40],
    price: 275,
    category: ["meat", "spicy"],
    rating: 2,
  },
  {
    _id: "65c4eb8cbc8f8de0b9ab94a8",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    title: "CheeseBurger",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 415,
    category: ["grilled", "spicy", "meat"],
    rating: 8,
  },
  {
    _id: "65c4eb8cbc8f8de0b9ab94aa",
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
    title: "Paper",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 675,
    category: ["meat", "closed"],
    rating: 9,
  },
];
