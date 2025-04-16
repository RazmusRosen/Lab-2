import express from 'express';
import employeesRoute from './routes/employees.js';
import projectAssignmentRoute from './routes/projectAssignment.js';
import projectRoute from './routes/projects.js';

const app = express();

app.use(express.json());
app.use('/api/employees', employeesRoute);
app.use('/api/projects', projectRoute);
app.use('/api/projectAssignment', projectAssignmentRoute);
