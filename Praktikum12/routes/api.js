const express = require("express");
const StudentController = require("../controllers/StudentController");

const router = express.Router();

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);

module.exports = router;
