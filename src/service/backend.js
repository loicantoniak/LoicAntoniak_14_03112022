import store from "../redux/store"
import { setEmployeesList } from "../redux/reducers/employees"

export const loadLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    store.dispatch(setEmployeesList(JSON.parse(serializedState)))
  } catch (err) {
    return undefined
  }
}

export const saveInLocalStorage = (key, data) => {
  try {
    const value = JSON.stringify(data)
    localStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
  }
}
