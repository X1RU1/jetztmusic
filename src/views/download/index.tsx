import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Download: React.FunctionComponent<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download) // Lets you skip re-rendering a component when its props are unchanged.
