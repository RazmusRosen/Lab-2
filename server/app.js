import express from 'express';
import employeesRoute from './routes/employeesRoute.js';
import projectAssignmentRoute from './routes/projectAssignmentRoute.js';
import projectRoute from './routes/projectsRoute.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors())
app.use(express.json());

//Getting the index.html file from the dist folder of the react app
app.use(express.static(path.join(__dirname, '../lab2_react_app/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join('../lab2_react_app/dist/index.html'));
})

app.use('/', employeesRoute);
app.use('/', projectRoute);
app.use('/', projectAssignmentRoute);

export default app