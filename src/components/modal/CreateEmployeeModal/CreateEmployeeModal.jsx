import React from "react"
import style from "./CreateEmployeeModal.module.scss"
import PropTypes from "prop-types"
import ReactModal from "@loicantoniak/react-modal"
import { ReactComponent as Create } from "../../../assets/create.svg"

CreateEmployeeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}

/**
 * Modale use like an ux validation : use  @loicantoniak/react-modal 's package with custom
 * @param {show} bool  
 * @param {onHide} function to close the modal  
 * @returns 
 */
export default function CreateEmployeeModal({ show, onHide }) {
  return (
    <ReactModal
      prefix="create_employee_modal"
      centered
      show={show}
      onHide={onHide}
      header={<div className={style.close} onClick={onHide} />}
    >
      <div className={style.content}>
        <Create />
        <h3>Employee Created!</h3>
      </div>
    </ReactModal>
  )
}
