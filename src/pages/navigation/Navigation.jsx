import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../../components/header/Header"
import { loadLocalStorage } from "../../service/backend"
// Pages
import CreateEmployee from "../createEmployee/CreateEmployee"
import EmployeeList from "../employeeList/EmployeeList"
import NoMatch from "../noMatch/Nomatch"

export default function Navigation() {
  loadLocalStorage("employees")

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
