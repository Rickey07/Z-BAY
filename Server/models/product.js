const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  saleprice: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: String,
  },
  actualPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: Buffer,
      contentType: String,
    },
  ],
});

productSchema
  .virtual("actualPrice")
  .set(function (salePrice, discountPercentage) {
    this.actualPrice = this.discountedPriceGenerator(
      salePrice,
      discountPercentage
    );
  })
  .get(function () {
    return this.actualPrice;
  });

productSchema.methods = {
  discountedPriceGenerator: function (salePrice, discountPercentage) {
    return Number((salePrice / 100) * discountPercentage);
  },
};

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
