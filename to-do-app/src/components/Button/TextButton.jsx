import React from 'react'
import './TextButton.scss'

export const TextButton = ({ text, handleClick, isActive }) => {

  return (
    <button className={`TextButton ${isActive && 'active'}`} onClick={handleClick}>{text}</button>
  )
}
