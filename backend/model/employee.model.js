const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status:{type:String}
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
