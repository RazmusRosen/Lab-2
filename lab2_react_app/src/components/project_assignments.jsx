import '../App.css';

export function TableStructure() {
    return(
        <div className="App">
            <h1>Project Assignments</h1>
            <table id="project-assignments-table">
              <tr>
              <th>Employee_ID</th>
              <th>Employee_name</th>
              <th>Project_name</th>
              <th>Start_date</th>
              </tr>
            </table>
        </div>
    )
}

export function TableData(project_assignments) {
    return(
        <tr>
            <td>{project_assignments.Employee_ID}</td>
            <td>{project_assignments.Employee_name}</td>
            <td>{project_assignments.Project_name}</td>
            <td>{project_assignments.Start_date}</td>
        </tr>
    )
}