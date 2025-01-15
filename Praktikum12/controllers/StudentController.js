const Student = require('../models/Student');

class StudentController {
  index(req, res) {
    Student.getAll((err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching students', error: err });
      }
      res.json({ message: 'Menampilkan semua students', data: results });
    });
  }

  store(req, res) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Nama student diperlukan' });
    }
    Student.create({ name }, (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error adding student', error: err });
      }
      res.json({ message: `Menambahkan data student: ${name}`, data: results });
    });
  }
}

module.exports = new StudentController();
