const express = require('express');
const router = express.Router();
const alumniController = require('../controllers/AlumniController');

// Route untuk mendapatkan semua data alumni
router.get('/alumni', alumniController.getAll);
// Route untuk menambahkan data alumni baru
router.post('/alumni', alumniController.create);
// Route untuk edit data alumni by id
router.put('/alumni/:id', alumniController.update);
// Route untuk menghapus data alumni by id
router.delete('/alumni/:id', alumniController.delete);
// Route untuk Mencari data alumni by id
router.get('/alumni/:id', alumniController.getById);
// Route untuk Mencari data alumni by name
router.get('/alumni/search/:name', alumniController.searchByName);
// Route untuk mengecek status alumni
router.get('/alumni/status/:status', alumniController.getByStatus);

module.exports = router;
