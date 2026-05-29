import "./temp-card.css";
import { useState, useEffect } from "react";

// component

export default function TempCard({ city }) {

    const [temp, setTemp] = useState(null);

    const API_key = import.meta.env.VITE_API_KEY;

    function fetchWeather() {

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
        )
            .then((res) => res.json())
            .then((data) => {
                setTemp(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchWeather();
    }, [city]);

    if(!temp || !temp.main){
        return(
            <h1>Enter a city</h1>
        );
    }

    console.log(temp)

    return (
        <>
            <div className="container-temp-card">

           


            <div className="temp-card">
            
            
            <h1>{temp.main.temp}° C</h1>

            <img 
                src={`https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`}
                alt="weather-icon"
            />
            </div>

            <div className="feels-like">
                <h1>Feels like <u>{temp.main.feels_like}</u>° C</h1>
                <h1>Humidity is <u>{temp.main.humidity}</u></h1>
                <h1>Wind speed is <u>{temp.wind.speed}</u> m/s</h1>
            </div>


            </div>
        </>
    );
}