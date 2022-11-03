import React from "react"
import style from "./form.module.scss"

export default function InputText({ handleChange, handleBlur, value, name, error }) {
  return (
    <div>
      <input type="text" onChange={handleChange} onBlur={handleBlur} value={value} name={name} />
      {error && <div className={style.error}>{error}</div>}
    </div>
  )
}
