async function getAll(req, res, next) {
  res.send("Your pizzas");
}

export default {
  getAll: getAll,
};
