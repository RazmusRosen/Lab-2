import mongoose from 'mongoose';


const projectAssignmentsSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees',
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects',
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now,
        required: true,
    }
})
    

const ProjectAssignments = mongoose.model('ProjectAssignments', projectAssignmentsSchema, 'projectAssignments');

export default ProjectAssignments;