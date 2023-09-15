import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CropContext } from '../formcontext/context';

const PredictDisease = () => {
  const {Picture, setPicture } = useContext(CropContext);
  const [cropImage, setCropImage] = useState(null);

  const initialValues = {
    image: ''
  };

  const validationSchema = Yup.object({
    image: Yup.mixed().required('Required')
  });

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCropImage(reader.result);
    };
  };

  const onSubmit = (values) => {
    console.log('Submitting form...', values);
    if (values.image) {
            const imageBlob = new Blob([values.image], { type: values.image.type })
            const image = URL.createObjectURL(imageBlob)
            setPicture(image)
            console.log(Picture)
          
    }
  };

  return (
    < div className='flex flex-col  justify-center items-center'>
    {cropImage && <img src={cropImage} alt="preview" className=' h-80' style={{width:'550px'}} />}
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form className='flex flex-col'>
            <div>
            <label htmlFor="image"><div className='flex flex-col border rounded-xl justify-center items-center  ' style={{width:'550px'}}>
              <div>
              <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-512.png" alt='loading' className='w-80 h-80' />
              </div>
              <div className='font-bold text-2xl text-white'>
                Drag and Drop or browse to choose a file
              </div>
              </div>
               </label>
            </div>
            <div>
            <input
              type="file"
              id="image"
              name="image"
              placeholder='Upload Image'
              accept="image/png, image/jpeg, image/webp"
              onChange={(event) => {
                formik.setFieldValue('image', event.currentTarget.files[0]);
                handleImagePreview(event);
              
              }}
              className='hidden'
            />
            </div>
            {formik.errors.image && formik.touched.image && <div>{formik.errors.image}</div>}
            <div>
            <button type="submit" className='bg-blue-500 text-4xl rounded-xl text-white font-bold'style={{width:'550px'}}>Predict Disease</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PredictDisease;
