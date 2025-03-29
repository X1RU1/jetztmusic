import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Djradio: React.FunctionComponent<IProps> = () => {
  return <div>Djradio</div>
}

export default memo(Djradio) // Lets you skip re-rendering a component when its props are unchanged.
