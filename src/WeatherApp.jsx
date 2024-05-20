import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";



export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Bhopal",
        feelslike:24.84,
        temp:25.34,
        tempMin:25.05,
        tempMax:25.78,
        humidity:47,
        weather:"haze",
    });

    let updateInfo =(newInfo)=>{
        setweatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by yoyo</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}