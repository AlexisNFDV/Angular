const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ProjectSchema = mongoose.Schema({
    name: String,
    description: String,
    start_date: {type: Date, default: Date.now},
    end_date: {type: Date, default: Date.now},
    customer: [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
    employee: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
    amount: Number,
    status: String
})

module.exports = mongoose.model('Project', ProjectSchema);