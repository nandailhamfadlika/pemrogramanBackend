
const students = require("../data/students");

class StudentController {
  // Tampilkan semua data students
  index(req, res) {
    res.json({
      message: "Menampilkan semua students",
      data: students,
    });
  }

  // Tambahkan data student
  store(req, res) {

    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Nama student diperlukan" });
    }
    students.push(name);
    res.json({
      message: `Menambahkan data student: ${name}`,
      data: students,
    });
  }

  // Update data student
  update(req, res) {

    const { id } = req.params;
    const { name } = req.body;
    const index = parseInt(id) - 1;

    if (!students[index]) {
      return res.status(404).json({ message: "Student tidak ditemukan" });
    }
    students[index] = name;
    res.json({
      message: `Mengedit student id ${id}, nama ${name}`,
      data: students,
    });
  }

  // Hapus data student
  destroy(req, res) {

    const { id } = req.params;
    const index = parseInt(id) - 1;

    if (!students[index]) {
      return res.status(404).json({ message: "Student tidak ditemukan" });
    }
    const removed = students.splice(index, 1);
    res.json({
      message: `Menghapus student id ${id}`,
      data: students,
    });
  }
}

module.exports = new StudentController();
