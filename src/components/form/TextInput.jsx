import React from "react"
import PropTypes from "prop-types"
import { Field, ErrorMessage } from "formik"

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default function TextInput({ name, label, ...props }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...props} className="form-control" />
      <ErrorMessage name={name}>{(error) => <div className="error">{error}</div>}</ErrorMessage>
    </div>
  )
}
