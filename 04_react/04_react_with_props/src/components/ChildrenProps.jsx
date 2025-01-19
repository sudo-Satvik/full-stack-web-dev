import React from 'react'

const ChildrenProps = ({ employeeData, children } ) => {
  return (
    <div>
        { children }
        <h1>Employee Record: </h1>
        <p>Employee Name: { employeeData.eName }</p>
        <p>Employee Company: { employeeData.cName }</p>
        <p>Employee Salary: 💵 { employeeData.sAmount }</p>
    </div>
  )
}

export default ChildrenProps