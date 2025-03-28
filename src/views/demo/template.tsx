import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

// FunctionComponent -> <IProps> generics
const Template: React.FunctionComponent<IProps> = () => {
  return <div>Template</div>
}

// directly type constraint to props
// const Download = (props: IProps) => {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//       <div>age: {props.age}</div>
//       <div>height: {props.name}</div>
//     </div>
//   )
// }

export default memo(Template) // Lets you skip re-rendering a component when its props are unchanged.
