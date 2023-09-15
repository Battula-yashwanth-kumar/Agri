import React from 'react'
import {Field ,ErrorMessage} from 'formik'
import TextError  from './TextError'
 
const Input=(props)=>{
const {placeholder, name,className, ...rest}=props
return(
    <div className=''>
        
        <Field id={name} name={name} placeholder={placeholder} className={className}  {...rest} />
        <ErrorMessage component={TextError} name={name} />
    </div>
)
}
export default Input