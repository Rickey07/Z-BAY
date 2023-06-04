import {loadStripe} from '@stripe/stripe-js';
console.log(process.env.REACT_APP_STRIPE_CLIENT_SECRET,process.env.REACT_APP_API_BASE_URL)

export const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_CLIENT_SECRET}`)

