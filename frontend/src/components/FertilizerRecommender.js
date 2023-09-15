import React, { useContext, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../form/FormikControl'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import { CropContext } from '../formcontext/context'

const FertilizerRecommender = () => {
    const {FertilizerResult,setFertilizerResult} =useContext(CropContext)
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(FertilizerResult){
            console.log('Finally:::', FertilizerResult);
            navigate('/FertilizerRecommended');
        }
        else{
            console.log("no data");
        }
    },[FertilizerResult]);

    const soil_type = [
        {key:'Select the soil type', value:'Select'},
        { key: 'Sandy', value: 'Sandy' },
        { key: 'Loamy', value: 'Loamy' },
        { key: 'Black', value: 'Black' },
        { key: 'Red', value: 'Red' },
        { key: 'Clayey', value: 'Clayey' }
    ]
const crop_type=[
    {key:'Select the crop variety', value:'Select'},
    {key:'Maize',value:'Maize'},
    {key:'Sugarcane',value:'Sugarcane'},
    {key:'Cotton',value:'Cotton'},
    {key:'Tobacco',value:'Tobacco'},
    {key:'Paddy',value:'Paddy'},
    {key:'Barley',value:'Barley'},
    {key:'Wheat',value:'Wheat'},
    {key:'Millets',value:'Millets'},
    {key:'Oil seeds',value:'Oil seeds'},
    {key:'Pulses',value:'Pulses'},
    {key:'Ground Nuts',value:'Ground Nuts'}
    
]
const intialvalues={
    Temperature:'',
    Humidity:'',
    Moisture:'',
    soil_type:'',
    crop_type:'',
    Nitrogen:'',
    Potassium:'',
    Phosphorous:''
    
}
const validationschema=Yup.object({
    Nitrogen:Yup.string().required('Required'),
    Phosphorous:Yup.string().required('Required'),
    Potassium:Yup.string().required("Required"),
    Temperature:Yup.string().required("Required"),
    Humidity:Yup.string().required('required'),
    Moisture:Yup.string().required('required'),
    soil_type:Yup.string().required('required'),
    crop_type:Yup.string().required('required')

})
const onSubmit=async(values)=>{
    console.log("FOrm data",values)
    const data =new FormData();
    for(let key in values){
        data.append(key,values[key]);
    }
    let result =await axios.post(`http://127.0.0.1:5000/predict_fertilizer`, data);
    console.log(result);

    if (!result) {
      <div>Loading</div>;
    } else if (result) {
      console.log('hello');
      setFertilizerResult(result.data.prediction);
    }

};
    return (
        <div className='flex flex-col justify-center items-center mt-36'  >
        <div className=' w-max flex flex-col justify-center items-center   '>
            <div className='bg-black text-white font-extrabold text-4xl text-centre   rounded-lg px-8 py-3  'style={{width:'550px'}}><h2>Fertilizer Recommender</h2></div>
<Formik
 initialValues={intialvalues}
validationSchema={validationschema}
onSubmit={onSubmit} >
    {(formik)=>(
     <Form className=''>

            <FormikControl control='input' type='text' placeholder='Amount of Nitrogen' className='mt-3  h-11 rounded-lg px-8 py-3 text-2xl font-semibold  'style={{width:'550px'}} name='Nitrogen' />
                <FormikControl control='input' type='text' placeholder='Amount of Phosphorous'className='mt-2  h-11 rounded-lg px-8 py-3 text-2xl font-semibold  'style={{width:'550px'}} name='Phosphorous'/>
                <FormikControl control='input' type='text' placeholder='Amount of Potassium'className='mt-2  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}} name='Potassium'/>
                <FormikControl control ='input' type='text' placeholder='Temperature in celicus'className='mt-2  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}} name='Temperature'/>
                <FormikControl control ='input' type='text' placeholder='Humidity' className='mt-2  h-11 rounded-lg px-8 py-3 text-2xl font-semibold 'style={{width:'550px'}} name='Humidity'/>
                <FormikControl control ='input' type='text' placeholder='Moisture'className='mt-2  h-11 rounded-lg px-8 py-3 text-2xl font-semibold  'style={{width:'550px'}} name='Moisture'/>
                <FormikControl control ='select' className='mt-2  h-11 rounded-lg px-8 py-1 text-2xl font-semibold ' name='soil_type'style={{width:'550px'}} options={soil_type} />
                <FormikControl control ='select'className='mt-2  h-11 rounded-lg px-8 py-1 text-2xl font-semibold ' name='crop_type'style={{width:'550px'}} options={crop_type} />
                <div className='mt-5'>
                <button type='submit' className='  h-11 rounded-lg px-8 py-1 text-2xl font-semibold text-black bg-blue-500' style={{width:'550px'}}>Predict Fertilizer</button>
                </div>
        </Form>
    )
    
    
    }
</Formik>
</div>
</div>
    )
}

export default FertilizerRecommender