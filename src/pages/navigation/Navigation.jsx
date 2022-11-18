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

  const e = [
    {
      firstName: "Loïc",
      lastName: "Antoniak",
      birthDate: "Mon Dec 04 1989 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Wed Jan 01 2020 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "1st street",
      city: "New York",
      state: {
        value: "NY",
        label: "New York",
      },
      code: 1,
      department: {
        value: "rh",
        label: "Human Resource",
      },
      id: "4uanfhFg7A",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
    {
      firstName: "Jean",
      lastName: "Dujardin",
      birthDate: "Wed Jan 09 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      startDate: "Tue Jan 01 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      street: "2nd street",
      city: "Los Angeles",
      state: {
        value: "CA",
        label: "California",
      },
      code: 51,
      department: {
        value: "marketing",
        label: "Marketing",
      },
      id: "QjKDjBbpDB",
    },
  ]

  useEffect(() => {
    const employees = loadState("employees")
    if (employees) {
      dispatch(setEmployeesList(e))
    }
  }, [dispatch])

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
