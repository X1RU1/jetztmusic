import React, { Suspense } from "react"
import { Link, useRoutes } from "react-router-dom"
import routes from "./router"
import { shallowEqualApp, useAppDispatch, useAppSelector } from "./store"
import { changeMessageAction } from "./store/modules/counter"

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction("Hello Message"))
  }

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
      <button onClick={handleChangeMessage}>Change Message</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
