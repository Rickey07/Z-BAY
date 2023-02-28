const { Router } = require("express");
const { signUp } = require("../controllers/auth");
const router = Router();

router.post('/signUp',signUp)

module.exports = router