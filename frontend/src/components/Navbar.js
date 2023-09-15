import React from 'react'
import { Link } from 'react-router-dom'


const Navbar=()=>{
    return(
        <nav className='flex bg-black   '>
            
       <div className='text-5xl font-extrabold'>
        <Link to='/' className='text-white'>Agri</Link>
       </div>
       <div className=''>
        <ul className='flex  space-x-12 px-12 py-5   text-xl font-bold  '>
            <Link to='/Weather' className='text-white hover:bg-gray-300 hover:text-gray-800 hover:rounded-md'>Weather</Link>
            <Link to='/CropRecommender' className='text-white hover:bg-gray-300 hover:text-gray-800 hover:rounded-md'>Crop Recommender</Link>
            <Link to='/FertilizerRecommender' className='text-white hover:bg-gray-300 hover:text-gray-800 hover:rounded-md'>Fertilizer Recommender</Link>
            <Link to='/Disease' className='text-white hover:bg-gray-300 hover:text-gray-800 hover:rounded-md'>Disease Prediction</Link>
        </ul>
       </div>
    
        </nav>
    )
}
export default Navbar