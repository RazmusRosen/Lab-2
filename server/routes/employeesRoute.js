import * as mongoDB from '../mongoDB.js'
import express from 'express'
import bcrypt from 'bcrypt'

const employeesRoute = express.Router()

employeesRoute.post('/api/employees', async (req, res) => {
    const {employee_id, full_name, email, password} = req.body
    const hashed_password = await bcrypt.hash(password, 10)

    try {
        const result = await mongoDB.insertEmployee({employee_id, full_name, email, hashed_password})
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
export default employeesRoute