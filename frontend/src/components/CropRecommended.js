import React, { useContext } from 'react'
import CropData from './CropData'
import { CropContext } from '../formcontext/context'
import { Link } from 'react-router-dom';

const CropRecommended = () => {
  const { CropResult,setCropResult } = useContext(CropContext);
  console.log("hellokweecjq3irv238rvh3ru :", CropResult)
  console.log("hey there :", CropData[CropResult.final_prediction]);
  const predictedCrop = CropData[CropResult.final_prediction]
  const clearstate=()=>{
    setCropResult(null);
  }
  return (
    <div className='flex flex-col justify-center items-center bg-white m-auto' style={{width:'650px',height:'880px'}}>
      <div>
      <div className=' bg-white text-black  mt-5 'style={{width:'600px',height:'750px'}}>
        <div className='' style={{width:'600px',height:'200px'}}>
          <img src={predictedCrop.imageUrl} alt ='loading'/>
        </div>
        <div className='mt-52'>
        <div className='ml-3 font-extrabold'>
          <p className='text-3xl'>Predicted Crop : <span className='text-3xl'>{predictedCrop.title}</span></p>
        </div>
        <div className='mt-3'>
          <p className='px-3'>{predictedCrop.description}</p>
        </div>
        <div className='border  mt-3 ' >
  <table className="">
    <thead>
      <tr>
        <th className="py-1">XGBoost Model Prediction</th>
        <th className="py-1">Random Forest Model Prediction</th>
        <th className="py-1">KNN Model Prediction</th>
      </tr>
    </thead>
    <tbody className='border' >
      <tr className="">
        <td className="px-1 py-1 font-semibold">{CropResult.xgb_model_prediction}<span className="ml-1 text-black">({CropResult.xgb_model_probability})</span></td>
        <td className="px-3 py-1 font-semibold">{CropResult.rf_model_prediction}<span className="ml-1 text-black">({CropResult.rf_model_probability})</span></td>
        <td className="px-3 py-1 font-semibold">{CropResult.knn_model_prediction}<span className="ml-1 text-black">({CropResult.knn_model_probability})</span></td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
      </div>
      </div>
      <Link to='/'><button className='bg-blue-500 text-white font-extrabold h-11  'style={{width:'600px'}} onClick={clearstate}>Back to Home</button></Link>
    </div>
  )
}
export default CropRecommended