import mongoose from 'mongoose';
const projectAssignmentsSchema = new mongoose.Schema({
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees',
        required: true,
    },
    project_code: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects',
        required: true
    },
    start_date: {
        type: Date,
        required: true,
    }
})
    

module.exports = mongoose.model('ProjectsAssignments', projectAssignmentsSchema, 'projectAssignments');