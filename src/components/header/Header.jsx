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
        <Link to="/create">
          <button className="btn btn-primary">Create Employee</button>
        </Link>
      )}

      {location.pathname === "/create" && (
        <Link to="/">
          <button className="btn btn-secondary">Retour</button>
        </Link>
      )}
    </div>
  )
}
