const express = require("express");

const hello = require("../controllers/authControllers");

const router = express.Router();

router.get("/get", hello)


module.exports = router;
