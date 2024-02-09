import mongoose, { Schema } from "mongoose";

const pizzaSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  types: [
    {
      type: Number,
      required: true,
    },
  ],
  sizes: [
    {
      type: Number,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Pizza = mongoose.model("pizza", pizzaSchema);

export default Pizza;
