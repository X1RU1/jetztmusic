import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Songs: React.FunctionComponent<IProps> = () => {
  return <div>Songs</div>
}

export default memo(Songs) // Lets you skip re-rendering a component when its props are unchanged.
