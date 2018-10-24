const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    company: String,
    address: String,
    contact: String,
    businessLine: String
})

module.exports = mongoose.model('Customer', CustomerSchema);