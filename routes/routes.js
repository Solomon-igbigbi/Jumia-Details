const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController")

router.get("/jumiadetails", mainController.getpage);



module.exports = router;