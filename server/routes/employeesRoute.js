import * as mongoDB from '../mongoDB.js'
import express from 'express'

const employeesRoute = express.Router()

employeesRoute.post('/api/employees', async (req, res) => {
    const {employee_id, full_name, email, hashed_password} = req.body
    try {
        const result = await mongoDB.insertEmployee({employee_id, full_name, email, hashed_password})
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
export default employeesRoute