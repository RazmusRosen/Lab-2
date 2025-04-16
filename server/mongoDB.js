
import mongoose from 'mongoose'
import dotenv from 'dotenv'

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
    }
    module.exports = connectDB;

export async function getAllDishes() {
    const database = client.db('lab1')
    const collection = database.collection('dish')
    const dishes = await collection.find().toArray()
    return dishes
}

export async function getProjectAssignments() {
    const database = client.db('lab2')
    const collection = database.collection('projectAssignments')
    const assignments = await collection.find().toArray()
    return assignments
}

export async function insertProjectAssignments(projectAssignment) {
    const {employee_id, project_code, start_date} = projectAssignment
    const database = client.db('lab2')
    const collection = database.collection('projectAssignments')
    const result = await collection.insertOne({employee_id, project_code, start_date})
    return result
}

export async function insertProject(project) {
    const {project_code, project_name, project_description} = project
    const database = client.db('lab2')
    const collection = database.collection('projects')
    const result = await collection.insertOne({project_code, project_name, project_description})
    return result
}

export async function insertEmployee(employee) {
    const {employee_id, full_name, email, hashed_password} = employee
    const database = client.db('lab2')
    const collection = database.collection('employees')
    const result = await collection.insertOne({employee_id, full_name, email, hashed_password})
    return result
}