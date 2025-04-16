import express from 'express';
import employeesRoute from './routes/employeesRoute.js';
import projectAssignmentRoute from './routes/projectAssignmentRoute.js';
import projectRoute from './routes/projectsRoute.js';

const app = express();

app.use(express.json());
app.use('/', employeesRoute);
app.use('/', projectRoute);
app.use('/', projectAssignmentRoute);
app.get('/', (req, res) => {
    res.send('Welcome to the Project Management System API!');
})

export default app