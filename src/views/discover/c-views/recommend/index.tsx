import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Recommend: React.FunctionComponent<IProps> = () => {
  return <div>Recommend</div>
}

export default memo(Recommend) // Lets you skip re-rendering a component when its props are unchanged.
