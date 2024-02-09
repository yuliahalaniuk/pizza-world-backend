import ctrlWrapper from "../helpers/ctrlWrapper.js";
import Pizza from "../models/pizza.js";

async function getAll(_, res) {
  const pizzas = await Pizza.find();
  res.json(pizzas);
}

export default {
  getAll: ctrlWrapper(getAll),
};
