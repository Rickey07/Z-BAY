const { Router } = require("express");
const { signUp, signIn } = require("../controllers/auth");
const router = Router();

router.post('/signUp',signUp)
router.post('/signIn',signIn)

module.exports = router