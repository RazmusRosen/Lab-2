import {useEffect, useState} from 'react';

const PORT = import.meta.env.VITE_PORT //need this syntax for importing env variables in react.

/*
Reference: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/
*/

export function FetchProjectAssignments() {
    const [project_assignments, setProjectAssignments] = useState([]);

    //Fetches the data from the server and sets the state of project_assignments to the data fetched.
    const fetchData = () => {
        fetch(`http://localhost:${PORT}/api/project_assignments`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const fixedData = []
            data.forEach((assignment) => {
                const fixedAssignment = {
                    _id: assignment._id,
                    employee_id: assignment.employee.employee_id,
                    employee_name: assignment.employee.full_name,
                    project_name: assignment.project.project_name,
                    start_date: assignment.start_date
                }
                fixedData.push(fixedAssignment)
            })
            setProjectAssignments(fixedData); //data is an array of objects, each object is a project assignment.
            console.log(fixedData);
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
        }, 60000); //1 minute interval
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

    //Sorts the project assignments array based on the selected column and direction
    function getSortedArray(project_assignments) {
    
        if(sort.direction === "asc") {
            if(sort.keyToSort === "start_date") {
                return project_assignments.sort((a, b) => new Date(a[sort.keyToSort]) - new Date(b[sort.keyToSort]));
            }
            if(sort.keyToSort === "employee_id") {
                return project_assignments.sort((a, b) => (a.employee_id > b.employee_id ? 1 : -1));
            }
            if(sort.keyToSort === "employee_name") {
                return project_assignments.sort((a, b) => (a.employee_name > b.employee_name ? 1 : -1));
            }
            if(sort.keyToSort === "project_name") {
                return project_assignments.sort((a, b) => (a.project_name > b.project_name ? 1 : -1));
            }
            }
            else {
                if(sort.keyToSort === "start_date") {
                    return project_assignments.sort((a, b) => new Date(b[sort.keyToSort]) - new Date(a[sort.keyToSort]));
                }
                if(sort.keyToSort === "employee_id") {
                    return project_assignments.sort((a, b) => (b.employee_id > a.employee_id ? 1 : -1));
                }
                if(sort.keyToSort === "employee_name") {
                    return project_assignments.sort((a, b) => (b.employee_name > a.employee_name ? 1 : -1));
                }
                if(sort.keyToSort === "project_name") {
                    return project_assignments.sort((a, b) => (b.project_name > a.project_name ? 1 : -1));
                }
    }
}

    return(
        <div className="App">
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
                            <td>{assignment.employee_id}</td>
                            <td>{assignment.employee_name}</td>
                            <td>{assignment.project_name}</td>
                            <td>{new Date(assignment.start_date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
