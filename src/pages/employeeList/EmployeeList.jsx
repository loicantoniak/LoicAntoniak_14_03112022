import React from "react"
import { useSelector } from "react-redux"

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees)

  console.log(employees)
  return <div className="container">EmployeeList</div>
}
