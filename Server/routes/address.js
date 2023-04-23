const express = require('express');
const router = express.Router();
const {createAddress,updateAddress,deleteAddress,getAddress,getAllAddress} = require('../controllers/address');
const {getAddressById} = require('../Middlewares/address');


// Param

router.param("addressId",getAddressById)

// Create Address
router.post('/new',createAddress)

// Update Address
router.put('/edit',updateAddress)

// Delete Address
router.delete('/delete',deleteAddress);

// Single Address
router.get("/:addressId",getAddress);

// All Address of User

router.get("/all/:userId",getAllAddress)







module.exports = router;