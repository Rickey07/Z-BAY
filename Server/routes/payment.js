const express = require("express");
const router = express.Router()
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET);


const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
  const { total } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",  
    automatic_payment_methods: {
      enabled: true,
    },
  });
  
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;