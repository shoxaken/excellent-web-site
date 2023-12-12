import React from 'react'
import styles from './InputControl.css'
function InputControl(props) {
  return (
    <div className='container'>
        {props.label && <label htmlFor="">{props.label}</label>}
        <input type="text" {...props}/>
    </div>
  )
}

export default InputControl