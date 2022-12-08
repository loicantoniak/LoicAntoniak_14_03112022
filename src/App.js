import { disableReactDevTools } from "@fvilers/disable-react-devtools"
import React from "react"
import { Provider } from "react-redux"
import Navigation from "./pages/navigation/Navigation"
import store from "./redux/store"

// eslint-disable-next-line no-undef
if(process.env.REACT_APP_NODE_ENV === "production") {
  disableReactDevTools()
}

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
