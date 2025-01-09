const connection = require('../config/database');

class Student {
  static getAll(callback) {
    connection.query('SELECT * FROM students', callback);
  }

  static create(data, callback) {
    connection.query('INSERT INTO students (name) VALUES (?)', [data.name], callback);
  }
}

module.exports = Student;
