import mongoose from 'mongoose';
const employeesSchema = new mongoose.Schema({
    employee_id: {
        type: Number,
        required: true,
        unique: true
    },
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true
    }
})
    

module.exports = mongoose.model('Employees', employeesSchema, 'employees');