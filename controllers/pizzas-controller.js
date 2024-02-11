import ctrlWrapper from "../helpers/ctrlWrapper.js";
import Pizza from "../models/pizza.js";

async function getAll(req, res) {
  if (req.query.category === "all") {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  }

  if (req.query.category) {
    const pizzas = await Pizza.find({ category: req.query.category });
    res.json(pizzas);
  }
}

export default {
  getAll: ctrlWrapper(getAll),
};
