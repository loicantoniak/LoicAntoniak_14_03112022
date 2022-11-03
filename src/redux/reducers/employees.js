import { createSlice } from "@reduxjs/toolkit"

const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    setEmployeesList(state, action) {
      return action.payload
    },
    removeEmployee(state, action) {
      const employeeId = action.payload
      return state.filter((e) => e.id !== employeeId)
    },
  },
})


export const { setEmployeesList, removeEmployee } =
employeeSlice.actions

export default employeeSlice.reducer
