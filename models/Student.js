const connection = require('../config/database');

class Student {
  static getAll() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM students', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO students (name) VALUES (?)', [data.name], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static update(id, data) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE students SET name = ? WHERE id = ?', [data.name, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM students WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }
}

module.exports = Student;
