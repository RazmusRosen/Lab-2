import * as mongoDB from '../mongoDB.js'
import express from 'express'

const projectRoute = express.Router()

projectRoute.post('/api/projects', async (req, res) => {
    const {project_code, project_name, project_description} = req.body
    try {
        const result = await mongoDB.insertProject({project_code, project_name, project_description})
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default projectRoute