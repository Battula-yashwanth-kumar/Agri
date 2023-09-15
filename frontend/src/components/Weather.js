import React,{useState, useEffect}from 'react'
import axios from 'axios'

const Weather=()=>{
  const [verify, setverify] =useState(null);
  const [Location, setLocation]= useState({
    loaded:false,
    coordinates: {lat:"",lng:""},
  });
  const [locweather ,setlocweather] =useState({
    weather:{
      Temp:'',
      condition:'',
      humidity:'',
      wind:'',
      pressure:'',
      pic:''
    }
  })
   const [Cropweather ,setCropweather] =useState({
    weather:{
      Temp:'',
      condition:'',
      humidity:'',
      wind:'',
      pressure:'',
      pic:""
    }
  })
  const [Croplocation, setCroplocation]= useState({
    loaded:false,
    coordinates: {lat:"",lng:""},
  });
  useEffect(()=>{
    getweather()
  },[Location])
  useEffect(()=>{
    const auth =localStorage.getItem('User');
    if(auth){
      setverify(auth);
    }
 else if(!auth){
    
    const { coordinates }=Croplocation;
   console.log( coordinates )
  if (coordinates.lat!==''&&coordinates.lng!=='') {
    localStorage.setItem("User", JSON.stringify( coordinates ));
  }
}
    getcropweather()
  },[Croplocation])


  const onSuccess=location=>{
    setLocation({
      loaded:true,
      coordinates:{
        lat:location.coords.latitude,
        lng:location.coords.longitude
      },
    });
    
  }

  const onError=(error)=>{
    setLocation({
      loaded:true,
      error,
    })
  }
useEffect(()=>{
  let auth =localStorage.getItem('User');
  auth=JSON.parse(auth)
  console.log("oijci",auth)
  if(auth){
    setCroplocation({
      loaded:true,
      coordinates:{
        lat:auth.lat,
        lng:auth.lng
      },
    });
    getcropweather()
  }
  if(!("geolocation" in navigator)){
    onError({
      code:0,
      message:"Geolocation not support",
    })
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
  
},[])

const getweather =async()=>{
  if(Location.coordinates.lat !==""&& Location.coordinates.lng!==""){
  const apiUrl =`http://api.weatherapi.com/v1/current.json?key=07c76e058db1438bb6864516230805&q=${Location.coordinates.lat},${Location.coordinates.lng}&aqi=no`
    const result = await axios.get(apiUrl);
    console.log(result)
    setlocweather({
      weather:{
      Temp:result.data.current.temp_c,
      condition:result.data.current.condition.text,
      humidity:result.data.current.humidity,
      wind:result.data.current.wind_kph,
      pressure:result.data.current.pressure_mb,
      pic:result.data.current.condition.icon,
    }
    })
    
   
    
  }

}
const getcropweather =async()=>{
  
  if(Croplocation.coordinates.lat !==""&& Croplocation.coordinates.lng!==""){
  const result =await axios.get(`http://api.weatherapi.com/v1/current.json?key=07c76e058db1438bb6864516230805&q=${Croplocation.coordinates.lat},${Croplocation.coordinates.lng}&aqi=no`)
 setCropweather({
      weather:{
      Temp:result.data.current.temp_c,
      condition:result.data.current.condition.text,
      humidity:result.data.current.humidity,
      wind:result.data.current.wind_kph,
      pressure:result.data.current.pressure_mb,
      pic:result.data.current.condition.icon
    }
    })
  

  }
}

const weathercondition =async()=>{
  if(!("geolocation" in navigator)){
    onerror({
      code:0,
      message:"Geolocation not support",
    })
  }
  navigator.geolocation.getCurrentPosition(onsuccess, onerror)
  
}

const onsuccess = async (location) => {
  setCroplocation({
    loaded: true,
    coordinates: {
      lat: location.coords.latitude,
      lng: location.coords.longitude
    },
  });

};
const deletecoordinates=()=>{
  localStorage.clear();
  setverify(null)
  setCroplocation({
    loaded: false,
    coordinates: {
      lat:'',
      lng:''
    },
  });
  console.log("done1")
  setCropweather({
    weather:{
    Temp:'',
    condition:'',
    humidity:'',
    wind:'',
    pressure:'',
    pic:''
  }
  })
  console.log("done2")
  
}


const onerror=(error)=>{
  setCroplocation({
    loaded:true,
    error,
  })
}
  return(
< div className='flex ml-16 justify-center items-center mt-8'>
<div className=" flex flex-col justify-center items-center   " >
<div className='text-3xl font-bold  mt-5  border text-white bg-black h-16 text-center pt-3' style={{width:'750px'}}>current weather on your crop</div>
<div className="border bg-transparent rounded-lg " style={{width:'750px',height:'500px'}}>

<div className='flex mt-1 justify-center items-center '>
  {verify?<div className='' ><button onClick={deletecoordinates} className='   border rounded-lg bg-black text-white  w-72 h-12'>Delete The Coordinates </button></div>:
  <div className='' ><button onClick={weathercondition} className='   border rounded-lg bg-black text-white  w-72 h-12'>Get Weather Condition</button></div>}
  </div>
  <div>
    <div className='flex ml-16  '>
    <div className='flex flex-col justify-center items-center ml-12 mt-7 '>
      <img src='https://media.tenor.com/vIymxU6p5pIAAAAM/teamupforimpact-teamup.gif' alt='' className='w-32 rounded-full' />
      <figcaption className='font-bold  text-white '>
Temperature
      </figcaption>
      <p className='font-extrabold text-green-500'>{Cropweather.weather.Temp}{'\u00B0'}C</p>
    </div> 
    <div className='flex flex-col justify-center items-center ml-12'>
    <img src={ `https:${Cropweather.weather.pic}` } alt='' className='w-40' />
      <figcaption className='font-bold  text-white'>
Weather
      </figcaption>
      <p className='font-extrabold text-green-500'>{Cropweather.weather.condition}</p>
    </div>
    <div className='flex flex-col justify-center items-center  mt-11'>
      <img src='https://cdn.dribbble.com/users/1186632/screenshots/4322984/windmill-illustration-3.gif' alt='' className='w-36 rounded-full' />
      <figcaption className='font-bold  text-white '>
Wind Speed
      </figcaption>
      <p className='font-extrabold text-green-500'>{Cropweather.weather.wind} kph</p>
    </div>
    </div>
    <div className='flex mt-9 ml-40'>
    <div className='flex flex-col justify-center items-center ml-12 mt-5'>
      <img src='https://i.pinimg.com/originals/c4/7b/69/c47b69a769d1fb433d08b5f3b5551c7b.gif' alt='' className='w-36 rounded-full' />
      <figcaption className='font-bold  text-white '>
Humidity
      </figcaption>
      <p className='font-extrabold text-green-500'>{Cropweather.weather.humidity} %</p>
    </div>
    <div className='flex flex-col justify-center items-center ml-12'>
      <img src='https://bestanimations.com/media/science/1055442838arc-gauge-animation-2.gif' alt='' className='w-32 rounded-full' />
      <figcaption className='font-bold  text-white '>
Atmospheric pressure
      </figcaption>
      <p className='font-extrabold text-green-500'>{Cropweather.weather.pressure} hPa</p>
    </div>
  </div>
  </div>
  </div>
  
  </div>
  <div className=" flex flex-col justify-center items-center ml-11  " >
<div  className='text-3xl font-bold  mt-5  border text-white bg-black h-16 text-center pt-3' style={{width:'750px'}}>current weather at your location</div>
<div className="border bg-transparent rounded-lg " style={{width:'750px',height:'500px'}}>


  <div>
    <div className='flex ml-16  '>
    <div className='flex flex-col justify-center items-center ml-12 mt-7 '>
      <img src='https://media.tenor.com/vIymxU6p5pIAAAAM/teamupforimpact-teamup.gif' alt='' className='w-32 rounded-full' />
      <figcaption className='font-bold  text-white '>
Temperature
      </figcaption>
      <p className='font-extrabold text-green-500'>{locweather.weather.Temp}{'\u00B0'}C</p>
    </div> 
    <div className='flex flex-col justify-center items-center ml-12'>
    <img src={ `https:${locweather.weather.pic}` } alt='' className='w-40' />
      <figcaption className='font-bold  text-white '>
Weather
      </figcaption>
      <p className='font-extrabold text-green-500'>{locweather.weather.condition}</p>
    </div>
    <div className='flex flex-col justify-center items-center  mt-11'>
      <img src='https://cdn.dribbble.com/users/1186632/screenshots/4322984/windmill-illustration-3.gif' alt='' className='w-36 rounded-full' />
      <figcaption className='font-bold  text-white '>
Wind Speed
      </figcaption>
      <p className='font-extrabold text-green-500'>{locweather.weather.wind} kph</p>
    </div>
    </div>
    <div className='flex mt-9 ml-40'>
    <div className='flex flex-col justify-center items-center ml-12 mt-5'>
      <img src='https://i.pinimg.com/originals/c4/7b/69/c47b69a769d1fb433d08b5f3b5551c7b.gif' alt='' className='w-36 rounded-full' />
      <figcaption className='font-bold  text-white '>
Humidity
      </figcaption>
      <p className='font-extrabold text-green-500'>{locweather.weather.humidity} %</p>
    </div>
    <div className='flex flex-col justify-center items-center ml-12'>
      <img src='https://bestanimations.com/media/science/1055442838arc-gauge-animation-2.gif' alt='' className='w-32 rounded-full' />
      <figcaption className='font-bold  text-white '>
Atmospheric pressure
      </figcaption>
      <p className='font-extrabold text-green-500'>{locweather.weather.pressure} hPa</p>
    </div>
  </div>
  </div>
  </div>
  
  </div>

</div>
  )
}
export default Weather;