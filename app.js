import express from "express";
import pizzaRouter from "./routes/api/pizzasRouter.js";

const app = express();

app.use(express.json());

app.use("/api/pizzas", pizzaRouter);

app.get("/contact", (req, res) => {
  res.json(result);
});

app.use((req, res) => {
  res.status(404).send("<h1>Not Found</h1>");
});

export default app;
