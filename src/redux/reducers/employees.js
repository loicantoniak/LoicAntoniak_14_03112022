import { createSlice, nanoid } from "@reduxjs/toolkit"

const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    setEmployeesList(state, action) {
      const newEmployee = { ...action.payload, id: nanoid() }
      state.push(newEmployee)
      return state
    },
    removeEmployee(state, action) {
      const employeeId = action.payload
      return state.filter((e) => e.id !== employeeId)
    },
  },
})

export const { setEmployeesList, removeEmployee } = employeeSlice.actions

export default employeeSlice.reducer
