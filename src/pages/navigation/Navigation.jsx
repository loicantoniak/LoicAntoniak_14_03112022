import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../../components/header/Header"
import { loadState } from "../../lib/localStorage"
import { setEmployeesList } from "../../redux/reducers/employees"
// Pages
import CreateEmployee from "../createEmployee/CreateEmployee"
import EmployeeList from "../employeeList/EmployeeList"
import NoMatch from "../noMatch/Nomatch"

export default function Navigation() {
  const dispatch = useDispatch()

  useEffect(() => {
    const employees = loadState("employees")
    if (employees) {
      dispatch(setEmployeesList(employees))
    }
  }, [])

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
