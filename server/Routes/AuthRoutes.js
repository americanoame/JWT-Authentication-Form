const { signup } = require("../Controllers/AuthController");

const router = require("express").Router();


router.post('/');

router.post("/register", register);

router.post("/login", signup);



module.exports = router;

