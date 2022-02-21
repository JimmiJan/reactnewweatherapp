// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react'
// import clear from ""
// import Cloudy from "";
// import Overcast from '';
// import Rainy from '';
// import Snow from '';
// const App = () => {

//   const [place, setplace] = useState('Lahore')
//   const [placeinfo, setplaceinfo] = useState({})

//   const fetchhandle = () => {
//     fetch(`http://api.weatherapi.com/v1/forecast.json?key=d08d88f4b53d43e3b0a170442222002&q=${place}&days=1&aqi=no&alerts=no`)
//       .then(response => response.json())
//       .then(data => setplaceinfo({
//         names: data.location.name,
//         country: data.location.country,
//         faraheit: {
//           current: data.current.temp_f,
//           high: data.forecast.forecastday[0].day.maxtemp_f,
//           low: data.forecast.forecastday[0].day.mintemp_f,
//         },
//         condition: data.current.condition.text
//       }));

//   }
//   console.log(placeinfo)


//   return (
//     <div style={
//       placeinfo.condition?.toLowerCase() === "clear" ||
//       placeinfo.condition?.toLowerCase() === "sunny"
//         ? { backgroundImage: `url(${clear})` }
//         : placeinfo.condition?.includes("cloudy")
//         ? { backgroundImage: `url(${Cloudy})` }
//         : placeinfo.condition?.toLowerCase().includes("rainy")
//         ? { backgroundImage: `url(${Rainy})` }
//         : placeinfo.condition?.toLowerCase().includes("snow")
//         ? { backgroundImage: `url(${Snow})` }
//         : { backgroundImage: `url(${Overcast})` }
   
//     }>
//       <div className="serach-input">
//         <input
//           type="text"
//           value={place}
//           className="form-group form-control w-50"
//           placeholder="Enter City name"
//           onChange={(e) => setplace(e.target.value)}
//         />


//         <button onClick={fetchhandle}>Search</button>
//       </div>
//       <div className='main-container'>
//         <div className='top-Part'>
//           <h1>{placeinfo && placeinfo.faraheit && placeinfo.faraheit.current}</h1>
//           <div>
//             <h1>{placeinfo.condition}</h1>
//             <h1>{placeinfo && placeinfo.faraheit && placeinfo.faraheit.high}</h1>
//             <h1>{placeinfo && placeinfo.faraheit && placeinfo.faraheit.low}</h1>

//           </div>
//         </div>
//         <h2> {placeinfo.names} ,{placeinfo.country}</h2>
//       </div>

//     </div>
//   )
// }

// export default App




import React from "react"
import "./App.css";
import { useState, useEffect } from "react";
import Clear from "./days pics/smoke.jpg";
import Cloudy from "./days pics/day.jpg";
import Overcast from "./days pics/smoke.jpg";
import Rainy from "./days pics/rain.jpg";
import Snow from "./days pics/clear.jpg";
import SearchIcon from "@mui/icons-material/Search";
function App() {
  const [place, setPlace] = useState("new york");
  const [placeInfo, setPlaceInfo] = useState({});

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=d08d88f4b53d43e3b0a170442222002&q=${place}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) =>
        setPlaceInfo({
          names: data.location.name,
          country: data.location.country,
          farenheit: {
            current: data.current.temp_f,
            high: data.forecast.forecastday[0].day.maxtemp_f,
            low: data.forecast.forecastday[0].day.mintemp_f
          },
          condition: data.current.condition.text
        })
      );

    setPlace("");
  };

  console.log(process.env.REACT_APP_API_KEY)

  return (
    <div
      className="app mx-auto" 
      style={
        placeInfo.condition?.toLowerCase() === "clear" ||
        placeInfo.condition?.toLowerCase() === "sunny"
          ? { backgroundImage: `url(${Clear})` }
          : placeInfo.condition?.includes("cloudy")
          ? { backgroundImage: `url(${Cloudy})` }
          : placeInfo.condition?.toLowerCase().includes("rainy")
          ? { backgroundImage: `url(${Rainy})` }
          : placeInfo.condition?.toLowerCase().includes("snow")
          ? { backgroundImage: `url(${Snow})` }
          : { backgroundImage: `url(${Overcast})` }
      }
    >
      <div className="d-flex justify-content-center p-0  h-20">
        <input
          type="text"
          className="my-3 form-control input-group "
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        < button onClick={handleFetch} className="btns btn btn-info pl-0 pr-0 pb-0 h- pt-0">
          Search
        </button>
          
          
         
       
      </div>
      <div className={"weather-container"}>
        <div className={"top-part"}>
          <h1> Current:{placeInfo.farenheit?.current}° F</h1>
          <div className={"condition-high-low"}>
            <h1>Condition:{placeInfo.condition}</h1>
            <h1> High:{placeInfo.farenheit?.high}° F</h1>
            <h1> Low:{placeInfo.farenheit?.low}° F</h1>
          </div>
        </div>
        <h2 className="m-0">
          {placeInfo.names}, {placeInfo.country}
        </h2>
      </div>
    </div>
  );
}

export default App; 







