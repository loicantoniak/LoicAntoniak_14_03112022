export const loadState = (item) => {
  try {
    const serializedState = localStorage.getItem(item)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (error) {
    console.log(error)
  }
}
