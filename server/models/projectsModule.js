import mongoose from 'mongoose';
const projectsSchema = new mongoose.Schema({
    project_code: {
        type: Number,
        required: true,
        unique: true
    },
    project_name: {
        type: String,
        required: true
    },
    project_description: {
        type: String,
        required: true,
        unique: true
    }
})
    

const Projects = mongoose.model('Projects', projectsSchema, 'projects');

export default Projects;