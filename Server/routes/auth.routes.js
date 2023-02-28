const { Router } = require("express");
const { signUp } = require("../controllers/auth");
const router = Router();

router('/',signUp)