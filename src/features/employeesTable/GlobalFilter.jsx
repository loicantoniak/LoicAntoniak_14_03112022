import React from "react"
import PropTypes from "prop-types"

GlobalFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

GlobalFilter.defaultProps = {
  value: "",
  onChange: () => {},
}

export default function GlobalFilter({ value, onChange }) {
  return (
    <div className="d-flex align-items-center">
      <div style={{ width: "6rem" }}>Search :</div>
      <input
        className="form-control"
        name="search"
        value={value || ""}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
  )
}
