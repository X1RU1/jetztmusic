import React, { memo } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number // Optional ?
}

// FunctionComponent -> <IProps> generics
const Download: React.FunctionComponent<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
      <div>height: {props.name}</div>
      <div>{props.children}</div>
    </div>
  )
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

export default memo(Download) // Lets you skip re-rendering a component when its props are unchanged.
