import React from 'react'
import employeeData from '../JSON/employee.json'
import '../CSS/employee.css'

const EmployeeList = () => {
    return (
        <div>
            <div className="header"><h1>Employees</h1></div>
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone no</th>

                    </tr>
                </thead>

                {employeeData.user.map((employee) => {
                    return (<tr> <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phoneNo}</td>

                    </tr>)
                })}
            </table>
        </div >
    )
}

export default EmployeeList
