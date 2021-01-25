const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController")

router.get("/", mainController.homepage);
router.post("/", mainController.postpage);


module.exports = router;