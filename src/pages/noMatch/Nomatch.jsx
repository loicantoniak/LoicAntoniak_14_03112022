import React from "react"
import style from "./NoMatch.module.scss"
import { ReactComponent as Error404 } from "../../assets/error404.svg"
import { Link } from "react-router-dom"

export default function Nomatch() {
  return (
    <div className="container">
      <div className={style.content}>
        <Error404 />
        <div className={style.rightColumn}>
          <h2>Error 404 - Not found</h2>
          <Link to="/">
            <button className="btn btn-primary">Return to homepage</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
