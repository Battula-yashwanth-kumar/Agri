import React from 'react'
import TextError from './TextError'
import { ErrorMessage, Field } from 'formik'

const File =(props)=>{
   const {placeholder,className, name, ...rest}=props
   return(
    <div className=''>
       
        <Field  id={name} name={name} placeholder={placeholder} className={className} {...rest} />
        <ErrorMessage component={TextError} name={name} />
    </div>
   )
}
export default File