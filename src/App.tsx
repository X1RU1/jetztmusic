import React, { Suspense } from "react"
import { Link, useRoutes } from "react-router-dom"
import { shallowEqual } from "react-redux"
import routes from "./router"
import { useAppSelector } from "./store"

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">Explore Music</Link>
        <Link to="/mine">My Music</Link>
        <Link to="/focus">Following</Link>
        <Link to="/download">Download</Link>
      </div>
      <h2>Current Counter: {count}</h2>
      <h2>Current Message: {message}</h2>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
