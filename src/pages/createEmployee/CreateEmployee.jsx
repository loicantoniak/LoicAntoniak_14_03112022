import React, { useState } from "react"
import style from "./CreateEmployee.module.scss"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextInput from "../../components/form/TextInput"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from "react-select"
import { states } from "../../lib/states"
import { departments } from "../../lib/departments"

const employee = {
  firstName: "",
  lastName: "",
  birthDate: "",
  startDate: "",
  street: "",
  city: "",
  state: "",
  code: "",
  department: "",
}

const employeeSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too short !").max(50, "Too long !").required("Required"),
  lastName: Yup.string().min(2, "Too short !").max(50, "Too long !").required("Required"),
  birthDate: Yup.string().required("Required"),
  startDate: Yup.string().required("Required"),
  street: Yup.string().min(2, "Too short !").max(50, "Too long !").required("Required"),
  city: Yup.string().min(2, "Too short !").max(50, "Too long !").required("Required"),
  state: Yup.object().required("Required").nullable(),
  code: Yup.number().required("Required"),
  department: Yup.object().required("Required").nullable(),
})

export default function CreateEmployee() {
  const [isClearable] = useState(true)
  const [isSearchable] = useState(true)
  const state_options = states.map((state) => ({ value: state.abbreviation, label: state.name }))

  function handleSubmit(values) {
    console.log(values)
  }

  return (
    <div className={style.container}>
      <h2>Create Employee</h2>

      <Formik
        initialValues={employee}
        validationSchema={employeeSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {(formik) => (
          <Form>
            <div className={style.group}>
              <TextInput name="firstName" label="First Name" />
              <TextInput name="lastName" label="Last Name" />
              <div>
                <label htmlFor="birthDate">Date of Birth</label>
                <DatePicker
                  selected={formik.values.birthDate}
                  dateFormat="MMMM d, yyyy"
                  className="form-control"
                  name="birthDate"
                  id="birthDate"
                  onChange={(date) => formik.setFieldValue("birthDate", date)}
                />
                <ErrorMessage name="birthDate">{(error) => <div className="error">{error}</div>}</ErrorMessage>
              </div>
              <div>
                <label htmlFor="startDate">Start Date</label>
                <DatePicker
                  selected={formik.values.startDate}
                  dateFormat="MMMM d, yyyy"
                  className="form-control"
                  name="startDate"
                  id="startDate"
                  onChange={(date) => formik.setFieldValue("startDate", date)}
                />
                <ErrorMessage name="startDate">{(error) => <div className="error">{error}</div>}</ErrorMessage>
              </div>
            </div>
            <fieldset>
              <legend>Address</legend>
              <div className={style.group}>
                <TextInput name="street" label="Street" />
                <TextInput name="city" label="City" />
                <div>
                  <label htmlFor="state">State</label>
                  <Select
                    name="state"
                    options={state_options}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                    onChange={(state) => formik.setFieldValue("state", state)}
                    onBlur={() => formik.setFieldTouched("state", true)}
                    value={formik.values.state}
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
                  <ErrorMessage name="state">{(error) => <div className="error">{error}</div>}</ErrorMessage>
                </div>

                <TextInput name="code" label="Zip Code" type="number" />
              </div>
            </fieldset>

            <div className={style.group}>
              <div>
                <label htmlFor="department">Department</label>
                <Select
                  name="department"
                  options={departments}
                  isClearable={isClearable}
                  isSearchable={isSearchable}
                  onChange={(department) => formik.setFieldValue("department", department)}
                  onBlur={() => formik.setFieldTouched("department", true)}
                  value={formik.values.department}
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
                <ErrorMessage name="department">{(error) => <div className="error">{error}</div>}</ErrorMessage>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
