const express = require('express');
const router = express.Router();
const {isSignedIn,isAdmin,isAuthenticated} = require('../Middlewares/auth');
const {getOverAllStats} = require('../Middlewares/analytics');

router.get('/',getOverAllStats)


module.exports = router