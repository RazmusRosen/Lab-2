import '../App.css';
import {useEffect, useState} from 'react';

/*
Reference: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/
*/

export function FetchProjectAssignments() {
    const [project_assignments, setProjectAssignments] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:5000/api/project_assignments')
        .then((response) => response.json())
        .then((data) => {
            setProjectAssignments(data);
        })
        .catch((error) => {
            console.error('Error fetching project assignments:', error);
        });
    };

    /*
    For the auto refresh reference: https://codesandbox.io/p/sandbox/auto-refresh-react-js-23f10?file=%2Fsrc%2FApp.js
    */
    useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
            console.log("Fetching data...");
            fetchData();
        }, 5000);
        return () => clearInterval(interval);
    }
    , []);
    
    /*
    The sorting is referenced mostly from this video: https://www.youtube.com/watch?v=ran0d8WHTYs
    */

    const [sort, setSort] = useState({keyToSort: "employee_id", direction: "asc"});

    function handleHeaderClick(header) {
        console.log(header)
        setSort({
            keyToSort: header,
            direction:
            header === sort.keyToSort ? sort.direction === "asc" ? "desc" : "asc" : "desc"
        })
    }

    function getSortedArray(arrayToSort) {
        const sorted = [...arrayToSort]
    
        if(sort.direction === "asc") {
            if(sort.keyToSort === "start_date") {
                return sorted.sort((a, b) => new Date(a[sort.keyToSort]) - new Date(b[sort.keyToSort]));
            }
            if(sort.keyToSort === "employee_id") {
                return sorted.sort((a, b) => (a.employee.employee_id > b.employee.employee_id ? 1 : -1));
            }
            if(sort.keyToSort === "employee_name") {
                return sorted.sort((a, b) => (a.employee.full_name > b.employee.full_name ? 1 : -1));
            }
            if(sort.keyToSort === "project_name") {
                return sorted.sort((a, b) => (a.project.project_name > b.project.project_name ? 1 : -1));
            }
            }
            else {
                if(sort.keyToSort === "start_date") {
                    return sorted.sort((a, b) => new Date(b[sort.keyToSort]) - new Date(a[sort.keyToSort]));
                }
                if(sort.keyToSort === "employee_id") {
                    return sorted.sort((a, b) => (b.employee.employee_id > a.employee.employee_id ? 1 : -1));
                }
                if(sort.keyToSort === "employee_name") {
                    return sorted.sort((a, b) => (b.employee.full_name > a.employee.full_name ? 1 : -1));
                }
                if(sort.keyToSort === "project_name") {
                    return sorted.sort((a, b) => (b.project.project_name > a.project.project_name ? 1 : -1));
                }
    }
}

    return(
        <div className="App">
            <h1>Project Assignments</h1>
            <table id="project-assignments-table">
                <thead>
                    <tr>
                        <th onClick={() => handleHeaderClick("employee_id")}>Employee_ID</th>
                        <th onClick={() => handleHeaderClick("employee_name")}>Employee_name</th>
                        <th onClick={() => handleHeaderClick("project_name")}>Project_name</th>
                        <th onClick={() => handleHeaderClick("start_date")}>Start_date</th>
                    </tr>
                </thead>
                <tbody>
                    {getSortedArray(project_assignments).map((assignment) => (
                        <tr key={assignment._id}>
                            <td>{assignment.employee.employee_id}</td>
                            <td>{assignment.employee.full_name}</td>
                            <td>{assignment.project.project_name}</td>
                            <td>{new Date(assignment.start_date).toLocaleDateString('utc')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
