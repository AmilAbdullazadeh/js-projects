import React from 'react'
import s from "./style.module.css"

export function FieldError({msg}) {
  return (
    <div className={s.container} >{ msg }</div>
  )
}
