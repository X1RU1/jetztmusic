import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Focus: React.FunctionComponent<IProps> = () => {
  return <div>Focus</div>
}

export default memo(Focus) // Lets you skip re-rendering a component when its props are unchanged.
