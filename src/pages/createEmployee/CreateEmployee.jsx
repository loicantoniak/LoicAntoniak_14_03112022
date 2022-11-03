import React from "react"
import style from "./CreateEmployee.module.scss"
import { Formik } from "formik"
import InputText from "../../components/form/inputText"

const employee = {
  firstName: "",
  lastName: "",
  birthDate: "",
  startDate: "",
  adress: { street: "", city: "", state: "", code: "", department: "" },
}

export default function CreateEmployee() {
  function handleSubmit(values, actions) {
    console.log(values)
  }
  return (
    <div className={style.container}>
      <h2>Create Employee</h2>

      <Formik initialValues={employee} onSubmit={(values, actions) => handleSubmit(values, actions)}>
        {(formik) => (
          <form className={style.createForm} onSubmit={formik.handleSubmit}>
            <InputText
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              name="firstName"
              value={formik.values.firstName}
            />
            <button type="submit">Save</button>
          </form>
        )}
      </Formik>
    </div>
  )
}
