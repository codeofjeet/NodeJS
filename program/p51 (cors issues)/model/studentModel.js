const mongoose = require('mongoose');
const studentSchema = require('../schema/studentSchema');

// 👇 3rd argument = exact collection name in MongoDB
const studentModel = mongoose.model('student', studentSchema, 'student');

module.exports = studentModel;