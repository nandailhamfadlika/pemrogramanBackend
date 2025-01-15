const Alumni = require('../models/alumniModel');

// Ambil Semua data alumni
exports.getAll = (req, res) => {
  Alumni.getAll((err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
      return;
    }
    if (!results.length) {
      res.status(200).json({ message: 'Data is empty' });
      return;
    }
    res.status(200).json({ message: 'Get All Resource', data: results });
  });
};

// Tambah Alumni
exports.create = (req, res) => {
  const data = req.body;
  if (!data.name || !data.phone || !data.address || !data.graduationYear) {
    res.status(422).json({ message: 'All fields must be filled correctly' });
    return;
  }
  Alumni.create(data, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error adding data', error: err });
      return;
    }
    res.status(201).json({ message: 'Resource is added successfully', data: { id: results.insertId, ...data } });
  });
};

// Update Data alumni by id
exports.update = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Alumni.update(id, data, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error updating data', error: err });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Resource not found' });
      return;
    }
    res.status(200).json({ message: 'Resource is update successfully', data: { id, ...data } });
  });
};


// delete Alumni by id
exports.delete = (req, res) => {
  const { id } = req.params;
  Alumni.delete(id, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error deleting data', error: err });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Resource not found' });
      return;
    }
    res.status(200).json({ message: 'Resource is delete successfully' });
  });
};

// Find Alumni by id
exports.getById = (req, res) => {
  const { id } = req.params;
  Alumni.findById(id, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
      return;
    }
    if (!results.length) {
      res.status(404).json({ message: 'Resource not found' });
      return;
    }
    res.status(200).json({ message: 'Get Detail Resource', data: results[0] });
  });
};

// Find Alumni by name
exports.searchByName = (req, res) => {
  const { name } = req.params;
  Alumni.findByName(name, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
      return;
    }
    if (!results.length) {
      res.status(404).json({ message: 'Resource not found' });
      return;
    }
    res.status(200).json({ message: 'Get searched resource', data: results });
  });
};
  // Cari Data status alumni
exports.getByStatus = (req, res) => {
  const { status } = req.params;
  Alumni.findByStatus(status, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
      return;
    }
    res.status(200).json({ message: `Get ${status} resource`, data: results });
  });
};
