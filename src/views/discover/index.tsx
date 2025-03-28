import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Discover: React.FunctionComponent<IProps> = () => {
  return <div>Discover</div>
}

export default memo(Discover) // Lets you skip re-rendering a component when its props are unchanged.
