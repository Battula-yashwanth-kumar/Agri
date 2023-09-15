import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CropRecommender from './components/CropRecommender';
import Home from './components/Home'
import Navbar from './components/Navbar';
import PredictDisease from './components/PredictDisease';
import Weather from './components/Weather';
import CropRecommended from './components/CropRecommended';
import CropContextProvider from './formcontext/context';
import FertilizerRecommender from './components/FertilizerRecommender';
import FertilizerRecommended from './components/FertilizerRecommended';


function App() {
  return (
    <CropContextProvider>
     
     <div
        className="h-screen"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/539282/pexels-photo-539282.jpeg?cs=srgb&dl=pexels-adam-kontor-539282.jpg&fm=jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/CropRecommended' element={<CropRecommended />} />
            <Route path='/CropRecommender' element={<CropRecommender />} />
            <Route path='/FertilizerRecommender' element={<FertilizerRecommender />} />
            <Route path='/FertilizerRecommended' element={<FertilizerRecommended />} />
            <Route path='/Disease' element={<PredictDisease />} />
            <Route path='/Weather' element={<Weather />} />
            
          </Routes>
        </BrowserRouter>
      </div>
      </div>
    </CropContextProvider >
  );
}

export default App;
