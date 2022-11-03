import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../../components/header/Header"
// Pages
import CreateEmployee from "../createEmployee/CreateEmployee"
import EmployeeList from "../employeeList/EmployeeList"
import NoMatch from "../noMatch/Nomatch"

export default function Navigation() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
