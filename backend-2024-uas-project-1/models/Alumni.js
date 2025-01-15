const db = require('../config/db');

class Alumni {
  // Ambil Data Alumni
  static getAll(callback) {
    const query = 'SELECT * FROM alumni';
    db.query(query, callback);
  }
  // Buat Data Alumni Baru 
  static create(data, callback) {
    const query = 'INSERT INTO alumni SET ?';
    db.query(query, data, callback);
  }
  // Update alumni yang sudah ada by ID
  static update(id, data, callback) {
    const query = 'UPDATE alumni SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  }
  // Delete alumni by ID
  static delete(id, callback) {
    const query = 'DELETE FROM alumni WHERE id = ?';
    db.query(query, id, callback);
  }
  // Cari Data alumni by ID
  static findById(id, callback) {
    const query = 'SELECT * FROM alumni WHERE id = ?';
    db.query(query, id, callback);
  }
  // Cari Data alumni by name
  static findByName(name, callback) {
    const query = 'SELECT * FROM alumni WHERE name LIKE ?';
    db.query(query, [`%${name}%`], callback);
  }
  // Cari Data status alumni
  static findByStatus(status, callback) {
    const query = 'SELECT * FROM alumni WHERE status = ?';
    db.query(query, status, callback);
  }
}

module.exports = Alumni;
