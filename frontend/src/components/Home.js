import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col  items-center justify-center mt-60 text-white">
      <div className="text-7xl font-bold text-center mb-7 ">Agri</div>
      <div className="text-2xl font-bold text-center mb-10">
        <hr className='font-bold' />
        A Web Application For Crop and Fertilizer Recommendation
      </div>
      <div className="flex ">
      <div className="px-3">
       <Link to='/Weather'> <button className="space-x-4  px-6 py-2 bg-black text-white rounded hover:bg-blue-700 ">
          WEATHER
        </button>
        </Link>

        </div>
        <div className="px-3">
         <Link to='/CropRecommender'><button className="space-x-4 px-6 py-2 bg-black text-white rounded hover:bg-blue-700 ">
           CROP RECOMMENDER
        </button>
        </Link>
        </div>
        <div className="px-3">
         <Link to='/FertilizerRecommender'><button className="space-x-4 px-2 py-2 bg-black text-white rounded hover:bg-blue-700  ">
         FERTILIZER RECOMMENDER
        </button>
        </Link>
        </div>
        <div className="px-3"></div>
        <Link to='/Disease'> <button className="space-x-4 px-4 py-2 bg-black text-white rounded hover:bg-blue-700 ">
           DISEASE PREDICTION
        </button>
        </Link>
        </div>
      </div>

  );
};

export default Home;
