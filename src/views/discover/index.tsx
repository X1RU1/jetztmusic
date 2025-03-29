import React, { memo, Suspense } from "react"
import type { ReactNode } from "react"
import { Outlet, Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Discover: React.FunctionComponent<IProps> = () => {
  return (
    <div>
      <Link to="/discover/recommend">Recommend</Link>
      <Link to="/discover/ranking">Ranking</Link>
      <Link to="/discover/songs">Playlist</Link>
      <Link to="/discover/djradio">Radio</Link>
      <Link to="/discover/artist">Artist</Link>
      <Link to="/discover/album">New Album</Link>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover) // Lets you skip re-rendering a component when its props are unchanged.
