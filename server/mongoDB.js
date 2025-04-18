import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Employees from './models/employeesModule.js';
import Projects from './models/projectsModule.js';
import ProjectAssignments from './models/projectAssignmentsModule.js';

dotenv.config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  };
    
    export default connectDB;

export async function getProjectAssignments() {
    const assignments = await ProjectAssignments.find().populate('employee project').limit(5);
    return assignments
}

export async function insertProjectAssignments(projectAssignment) {
    const {employee, project, start_date} = projectAssignment
    const result = await ProjectAssignments.create({employee, project, start_date})
    return result
}

export async function insertProject(project) {
    const {project_code, project_name, project_description} = project
    const result = await Projects.create({project_code, project_name, project_description})
    return result
}

export async function insertEmployee(employee) {
    const {employee_id, full_name, email, hashed_password} = employee
    const result = await Employees.create({employee_id, full_name, email, hashed_password})
    return result
}