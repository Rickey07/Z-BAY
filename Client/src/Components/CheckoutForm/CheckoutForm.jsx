import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import placeOrder from "../../helpers/APICalls/placeOrder";
import {useSelector,useDispatch} from 'react-redux'
import { useAuthUser } from "react-auth-kit";
import { cartActions } from "../../redux/CartSlice";
import {toast} from 'react-toastify'


export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const auth = useAuthUser();
  const { _id } = auth()
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    // Save Order Details in DB and Update
    const dataForNewOrder = {
      order:{
        products:cart?.cart,
        amount:cart?.total,
        transaction_id:Math.random()*532,
        address:cart.address, // This will be address Id
        order_id:Math.random()*399,
        status:"Recieved",
        user:_id
      }
    }
    console.log(dataForNewOrder)
    const result = await placeOrder(dataForNewOrder)
    if(result?.statusCode === 200) {
      dispatch(cartActions.clearCart());
      toast.success("Your Order has been Placed Successfully!")
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000",
        },
      });
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");  
      }
    } else {
      toast.warn("Some Error Occurred while Placing your order!")
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {/* <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
