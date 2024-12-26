const express = require("express");
const StudentController = require("../controllers/StudentController");

const router = express.Router();

// Rute untuk menampilkan semua students
router.get("/students", StudentController.index);

// Rute untuk menambahkan student baru
router.post("/students", StudentController.store);

// Rute untuk mengedit data student
router.put("/students/:id", StudentController.update);

// Rute untuk menghapus student
router.delete("/students/:id", StudentController.destroy);

module.exports = router;
