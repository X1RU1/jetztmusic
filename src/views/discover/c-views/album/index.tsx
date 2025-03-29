import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Album: React.FunctionComponent<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album) // Lets you skip re-rendering a component when its props are unchanged.
