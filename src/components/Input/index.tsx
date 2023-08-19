import { InputHTMLAttributes } from 'react'

import './index.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {} 

export function Input({ ...props }: InputProps) {
  return (
    <>
      <input type="text" {...props} />
    </>
  )
}