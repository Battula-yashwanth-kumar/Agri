import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

const Select=(props)=>{
    const {placeholder, name,className, options ,...rest}=props
    return(
        <div className=''>
            
            <Field as='select' id={name} placeholder={placeholder} className={className} name={name} {...rest} >
            {
                options.map(option=>{
                    return(
                        <option key={option.value} value={option.value} >
                            {option.key}
                        </option>
                    )
                })
            }
            </Field>
            <ErrorMessage component ={TextError} name={name} />
        </div>
    )
}
export default Select