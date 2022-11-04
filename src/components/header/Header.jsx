import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import style from "./header.module.scss"

export default function Header() {
  const location = useLocation()

  return (
    <div className={style.container}>
      <h1>HRnet</h1>
      {location.pathname === "/" && (
        <Link to="/employees">
          <button className="btn btn-primary">View Current Employees</button>
        </Link>
      )}

      {location.pathname === "/employees" && (
        <Link to="/">
          <button className="btn btn-secondary">Home</button>
        </Link>
      )}
    </div>
  )
}
