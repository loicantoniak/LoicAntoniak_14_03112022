import { createSlice } from "@reduxjs/toolkit"

const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    setEmployeesList(state, { payload }) {
      state = payload
      return state
    },
  },
})

export const { setEmployeesList } = employeeSlice.actions

export default employeeSlice.reducer
