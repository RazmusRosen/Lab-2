import '../App.css';
import {useEffect, useState} from 'react';

/*
Reference: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/
*/

export function FetchProjectAssignments() {
    const [project_assignments, setProjectAssignments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/project_assignments')
        .then((response) => response.json())
        .then((data) => {
            setProjectAssignments(data);
        })
        .catch((error) => {
            console.error('Error fetching project assignments:', error);
        });
    }, []);

    return(
        <div className="App">
            <h1>Project Assignments</h1>
            <table id="project-assignments-table">
                <thead>
                    <tr>
                        <th>Employee_ID</th>
                        <th>Employee_name</th>
                        <th>Project_name</th>
                        <th>Start_date</th>
                    </tr>
                </thead>
                <tbody>
                    {project_assignments.map((assignment) => (
                        console.log(assignment),
                        console.log(assignment.employee_id.employee_id),
                        <tr key={assignment._id}>
                            <td>{assignment.employee_id.employee_id}</td>
                            <td>{assignment.employee_id.full_name}</td>
                            <td>{assignment.project_code.project_name}</td>
                            <td>{new Date(assignment.start_date).toLocaleDateString('utc')}</td>
                        </tr>
                    ))}
                </tbody>
 
                
            </table>
        </div>
    )
}
