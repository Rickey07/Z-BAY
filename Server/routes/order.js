const express = require('express');
const router  = express.Router();
const {isSignedIn,isAuthenticated, isAdmin} = require('../Middlewares/auth')
const {placeOrder,getAllOrders,updateOrderStatus} = require('../controllers/order');


// Place Order Route
router.post('/new-order',isSignedIn,isAuthenticated,placeOrder);


// Get All Orders
router.get('/all-orders',isSignedIn,isAuthenticated,isAdmin,getAllOrders);

// Update Order Status
router.patch('/update/:orderId',isSignedIn,isAuthenticated,isAdmin,updateOrderStatus);


module.exports = router;

