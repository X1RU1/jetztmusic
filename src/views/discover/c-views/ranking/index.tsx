import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Ranking: React.FunctionComponent<IProps> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking) // Lets you skip re-rendering a component when its props are unchanged.
