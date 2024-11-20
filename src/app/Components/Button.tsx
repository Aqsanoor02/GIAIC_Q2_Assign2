import React from 'react'


interface ButtonProps{
    label:string;
    className?:string
}
function Button({label,className=''}:ButtonProps) {
  return (
    
        <button type="button" className={className} >
            {label}
        </button>
    
  )
}

export default Button