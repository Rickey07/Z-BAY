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
  discountedPrice: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
});

productSchema
  .virtual("Price")
  .set(function (salePrice) {
    this._discountedPercent = this.discountPercentage;
    this.discountedPrice = this.discountedPriceGenerator(
      salePrice,
      this._discountedPercent
    );
  })
  .get(function () {
    return this.discountedPrice;
  });

productSchema.methods = {
  discountedPriceGenerator: function (salePrice, discountPercentage) {
    return salePrice - Number((Number(salePrice) / 100) * discountPercentage);
  },
};

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
