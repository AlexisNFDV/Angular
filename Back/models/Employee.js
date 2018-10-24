const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: String,
    username: String,
    day_of_birth: {type: Date, default: Date.now},
    address: String,
    phone_number: Number,
    mail: String,
    job: String
})

module.exports = mongoose.model('Employee', EmployeeSchema);