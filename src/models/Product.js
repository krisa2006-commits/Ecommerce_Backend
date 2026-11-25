const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is require"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Price is require"],
      min: 0,
    },

    stock: {
      type: Number,
      required: [true, "Stock is require"],
      min: 0,
      default: 0,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is require"],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
