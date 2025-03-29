import React, { Suspense } from "react"
import { Link, useRoutes } from "react-router-dom"
import routes from "./router"

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">Explore Music</Link>
        <Link to="/mine">My Music</Link>
        <Link to="/focus">Following</Link>
        <Link to="/download">Download</Link>
      </div>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
