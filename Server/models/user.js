const mongoose = require("mongoose");
const { Schema } = mongoose;
const {ObjectId} = Schema
const {uuid} = require('uuidv4');
const crypto = require("crypto");

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  profilePic: {
    type: String,
  },
  addresses: [{
      type: ObjectId,
      ref: "Address",
  }],
  purchases: [
    {
      type:ObjectId,
      ref:"Order"
    }
  ],
  salt: String,
  encry_password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

userSchema.virtual("fullName").get(function () {
  return this.firstname + this.lastname;
});

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainPassword) {
    return this.securePassword(plainPassword) === this.encry_password;
  },

  securePassword: function (plainPassword) {
    if (!plainPassword) {
      return "";
    }
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
    } catch (error) {
      return ""
    }
  },
};

const User = mongoose.model("User",userSchema);

module.exports = User;