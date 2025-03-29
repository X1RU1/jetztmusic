import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Artist: React.FunctionComponent<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist) // Lets you skip re-rendering a component when its props are unchanged.
