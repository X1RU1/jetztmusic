import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Mine: React.FunctionComponent<IProps> = () => {
  return <div>Mine</div>
}

export default memo(Mine) // Lets you skip re-rendering a component when its props are unchanged.
