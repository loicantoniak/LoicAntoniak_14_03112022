import React, { useMemo } from "react"
import { format } from "date-fns/esm"
import { useSelector } from "react-redux"
import EmployeesTable from "../../features/employeesTable/EmployeesTable"

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees)

  const data = useMemo(() => {
    return [...employees]
  }, [employees])

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
        Cell: ({ cell: { value } }) => {
          return format(new Date(value), "yyyy-MM-dd")
        },
      },
      {
        Header: "Department",
        accessor: "department.label",
      },
      {
        Header: "Date of Birth",
        accessor: "birthDate",
        Cell: ({ cell: { value } }) => {
          return format(new Date(value), "yyyy-MM-dd")
        },
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state.value",
      },
      {
        Header: "Zip Code",
        accessor: "code",
      },
    ],
    []
  )

  return <EmployeesTable data={data} columns={columns} />
}
