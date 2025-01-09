const Student = require('../models/Student');

class StudentController {
  async index(req, res) {
    try {
      const results = await Student.getAll();
      if (results.length === 0) {
        return res.status(404).json({ message: 'No students found' });
      }
      res.json({ message: 'Menampilkan semua students', data: results });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching students', error });
    }
  }

  async store(req, res) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Nama student diperlukan' });
    }
    try {
      const result = await Student.create({ name });
      res.json({ message: `Menambahkan data student: ${name}`, data: result });
    } catch (error) {
      res.status(500).json({ message: 'Error adding student', error });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Nama student diperlukan' });
    }
    try {
      const result = await Student.update(id, { name });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: `Data student dengan id ${id} berhasil diperbarui`, data: result });
    } catch (error) {
      res.status(500).json({ message: 'Error updating student', error });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const result = await Student.delete(id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: `Data student dengan id ${id} berhasil dihapus` });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting student', error });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const result = await Student.findById(id);
      if (!result) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: `Menampilkan data student dengan id ${id}`, data: result });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching student', error });
    }
  }
}

module.exports = new StudentController();
