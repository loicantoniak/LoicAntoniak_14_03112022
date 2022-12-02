/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react"
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination, useAsyncDebounce } from "react-table"
import Select from "react-select"
import { pageSize as options } from "../../lib/constant"
// icons
import { ReactComponent as SortIcon } from "../../assets/sort.svg"
import { ReactComponent as SortIconUp } from "../../assets/sort_up.svg"
import { ReactComponent as SortIconDown } from "../../assets/sort_down.svg"
import { useState } from "react"
import GlobalFilter from "./GlobalFilter"

export default function Table({ data, columns }) {
  const [value, setValue] = useState("")
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: data,
      initialState: { pageSize: options[0].value },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  )

  const onFilterChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  React.useEffect(() => {
    if (value) {
      onFilterChange(value)
    }
  }, [onFilterChange, value])

  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-between">
          <label htmlFor="page" id="page-label">Show</label>
          <Select
            className="mx-1"
            name="pageSize"
            inputId="page"
            defaultValue={pageSize}
            options={options}
            onChange={(e) => {
              setPageSize(Number(e.value))
            }}
            isDisabled={false}
            isLoading={false}
            isClearable={false}
            isRtl={false}
            isSearchable={false}
            value={pageSize}
            placeholder={pageSize}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#a7b372",
                primary50: "#a7b372",
                primary: "#6f850b",
              },
            })}
          />
          entries
        </div>

        <GlobalFilter value={value} onChange={(v) => setValue(v)} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? column.isSortedDesc ? <SortIconDown /> : <SortIconUp /> : <SortIcon />}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length === 0 ? (
            <tr >
              <td colSpan="9">No data available in table</td>
            </tr>
          ) : (
            page.map((row, i) => {
              prepareRow(row)
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td key={index} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    )
                  })}
                </tr>
              )
            })
          )}
        </tbody>
      </table>

      <div className="d-flex align-items-center justify-content-between">
        <span>
          Showing {page.length === 0 ? 0 : pageIndex * pageSize + 1} to {pageIndex * pageSize + page.length} of {rows?.length} entries
        </span>

        <div className="d-flex align-items-center justify-content-between">
          <button className="btn btn-primary mr-1" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button className="btn btn-primary mr-1" onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button className="btn btn-primary mr-1" onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button className="btn btn-primary mr-1" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {">>"}
          </button>{" "}
        </div>
      </div>
    </div>
  )
}
