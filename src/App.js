/* eslint-disable no-undef */
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
import React from "react"
import { Provider } from "react-redux"
import Navigation from "./pages/navigation/Navigation"
import store from "./redux/store"

/**
 * Use a package for disabled react dev tools in production env
 */
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
