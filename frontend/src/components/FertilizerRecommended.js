import React,{useContext} from 'react'
import { fertilizerData } from './CropData'
import { CropContext } from '../formcontext/context'
import { Link } from 'react-router-dom';

const FertilizerRecommended=()=>{
    const {FertilizerResult,setFertilizerResult} =useContext(CropContext);
    console.log("Hellvnesubrsu:",FertilizerResult);
    console.log("hey :",fertilizerData[FertilizerResult.final_prediction]);
    const predictedFertilizer=fertilizerData[FertilizerResult.final_prediction];
    const clearstate=()=>{
        setFertilizerResult(null);
      }
    return(
        <div className='flex flex-col justify-center items-center bg-white m-auto' style={{width:'650px',height:'850px'}}>
        <div>
        <div className=' bg-white text-black  mt-5 'style={{width:'600px',height:'750px'}}>
          <div className='' style={{width:'600px',height:'200px'}}>
            <img src={predictedFertilizer.imageUrl} />
          </div>
          <div className='mt-52'>
          <div className='ml-3 font-extrabold'>
            <p className='text-3xl'>Predicted Fertilizer : <span className='text-3xl'>{predictedFertilizer.title}</span></p>
          </div>
          <div className='mt-3'>
            <p className='px-3'>{predictedFertilizer.description}</p>
          </div>
          <div className='border  mt-7 ml-5' >
  <table className="w-full">
    <thead>
      <tr>
        <th className="py-2">XGBoost Model Prediction</th>
        <th className="py-2">Random Forest Model Prediction</th>
        <th className="py-2">SVM Model Prediction</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-3 py-2 font-semibold border-t">{FertilizerResult.xgb_model_prediction}<span className="ml-1 text-black">({FertilizerResult.xgb_model_probability})</span></td>
        <td className="px-3 py-2 font-semibold border-t">{FertilizerResult.rf_model_prediction}<span className="ml-1 text-black">({FertilizerResult.rf_model_probability})</span></td>
        <td className="px-3 py-2 font-semibold border-t">{FertilizerResult.svm_model_prediction}<span className="ml-1 text-black">({FertilizerResult.svm_model_probability})</span></td>
      </tr>
    </tbody>
  </table>
</div>

  
        </div>
        </div>
        </div>
        <Link to='/'><button className='bg-blue-500 text-white font-extrabold h-11 'style={{width:'600px'}} onClick={clearstate}>Back to Home</button></Link>
      </div>
    )
}
export default FertilizerRecommended