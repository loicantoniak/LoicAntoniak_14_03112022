import { createSlice } from "@reduxjs/toolkit"

const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    setEmployeesList(state, { payload }) {
      return payload
    },
    addEmployee(state, {payload}) {
      state.push(payload)
    }
  },
})

export const { setEmployeesList, addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
