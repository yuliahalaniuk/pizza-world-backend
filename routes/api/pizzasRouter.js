import express from "express";
import pizzasController from "../../controllers/pizzas-controller.js";

const router = express.Router();

router.get("/", pizzasController.getAll);

export default router;
