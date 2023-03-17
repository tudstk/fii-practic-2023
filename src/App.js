import "./App.css"
import Home from "./pages/Home"
import React from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./services/router"

function App() {
  return <RouterProvider router={router} />
}

export default App
