import React from 'react'

function Input (props) {
  const {
    onChange,
    id,
    label,
    type,
    value,
  } = props

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </>
  )
}

export default Input
