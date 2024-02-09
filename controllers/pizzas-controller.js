import ctrlWrapper from "../helpers/ctrlWrapper.js";
import Pizza from "../models/pizza.js";

async function getAll(req, res, next) {
  const pizzas = await Pizza.find();
  res.json(pizzas);
}

export default {
  getAll: ctrlWrapper(getAll),
};
