import React, { useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../form/FormikControl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CropContext } from '../formcontext/context';


const CropRecommender = () => {
const {CropResult,setCropResult} =useContext(CropContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (CropResult) {
      console.log('Finally:::', CropResult);
      navigate('/CropRecommended');
    }
    else {
      console.log("no data");
    }
  }, [CropResult]);

  const initialValues = {
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  };

  const validationSchema = Yup.object({
    N: Yup.string().required('Required'),
    P: Yup.string().required('Required'),
    K: Yup.string().required('Required'),
    temperature: Yup.string().required('Required'),
    humidity: Yup.string().required('required'),
    ph: Yup.string().required('required'),
    rainfall: Yup.string().required('required')
  });

  const onSubmit = async (values) => {
    const data = new FormData();
    for (let key in values) {
      data.append(key, values[key]);
    }

    let result = await axios.post(`http://127.0.0.1:5000/predict_crop`, data);
    console.log(result.data.prediction);

    if (!result) {
      <div>Loading</div>;
    } else if (result) {
      console.log('hello');
      setCropResult(result.data.prediction);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mt-36'  >
    <div className=' w-max flex flex-col justify-center items-center   '>
        <div className='bg-black text-white font-extrabold text-4xl text-centre   rounded-lg px-8 py-3  'style={{width:'550px'}}><h2>Fertilizer Recommender</h2></div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            type='text'
            placeholder='Amount of Nitrogen'
            className='mt-3  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}}
            name='N'
          />
          <FormikControl
            control='input'
            type='text'
            placeholder='Amount of Phosphorous'
            className='mt-3  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}}
            name='P'
          />
          <FormikControl
            control='input'
            type='text'
            placeholder='Amount of Potassium'
            className='mt-3  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}}
            name='K'
          />
          <FormikControl
            control='input'
            type='text'
            placeholder='Temperature in celicus'
            className='mt-3  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}}
            name='temperature'
          />
          <FormikControl
            control='input'
            type='text'
            placeholder='Humidity'
            className='mt-3  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}}
            name='humidity'
          />
          <FormikControl
            control='input'
            type='text'
            placeholder='Amount of pH'
            className='mt-3  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}}
            name='ph'
          />
          <FormikControl
            control='input'
            type='text'
            placeholder='Average Rainfall'
            className='mt-3  h-11 rounded-lg px-8 py-3 text-2xl font-semibold text-black 'style={{width:'550px'}}
            name='rainfall'
          />
          
          <div className='mt-5'>
                <button type='submit' className='  h-11 rounded-lg px-8 py-1 text-2xl font-semibold text-black bg-blue-500' style={{width:'550px'}}>Predict Crop</button>
                </div>
        </Form>
      )}
    </Formik>
    </div>
</div>


  );
};

export default CropRecommender;
