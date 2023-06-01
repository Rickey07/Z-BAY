const express = require('express');
const router  = express.Router();
const {isSignedIn,isAuthenticated, isAdmin} = require('../Middlewares/auth');
const updateProductStock = require('../Middlewares/Miscellaneous/updateProductStock')
const {placeOrder,getAllOrders,updateOrderStatus} = require('../controllers/order');


// Place Order Route
router.post('/new',updateProductStock,placeOrder);


// Get All Orders
router.get('/all-orders',isSignedIn,getAllOrders);

// Update Order Status
router.patch('/update/:orderId',isSignedIn,isAuthenticated,isAdmin,updateOrderStatus);


module.exports = router;

