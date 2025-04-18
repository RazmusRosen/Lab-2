import * as mongoDB from '../mongoDB.js'
import express from 'express'

const projectAssignmentRoute = express.Router()

projectAssignmentRoute.get('/api/project_assignments', async (req, res) => {
    try {
        const assignments = await mongoDB.getProjectAssignments()
        res.status(200).json(assignments)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

projectAssignmentRoute.post('/api/project_assignments', async (req, res) => {
    try {
        const {employee, project, start_date} = req.body
        const result = await mongoDB.insertProjectAssignments({employee, project, start_date})
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default projectAssignmentRoute