import React from 'react'

const Employee = ({ employeeData }) => {
  return (
    <div>
        <h1>Employee Record: </h1>
        <p>Employee Name: { employeeData.eName }</p>
        <p>Employee Company: { employeeData.cName }</p>
        <p>Employee Salary: 💵 { employeeData.sAmount }</p>

    </div>
  )
}

export default Employee