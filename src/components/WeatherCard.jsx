import React, { useState } from 'react'

const WeatherCard = ({weather, temp}) => {
    const [isCelsius, setisCelsius] = useState(true)
    const handleChangeTemp = () => setisCelsius(!isCelsius)
        
  return (
    <article className='container'>
        <h1>Weather App</h1>
        <h4>{weather?.name},{weather?.sys.country}</h4>
        <div className='info'>
            <div className='info__img'>
            <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
            </div>
            <section>
                <h3>"{weather?.weather[0].description}"</h3>
                <ul className='list'>
                    <li className='list__titulo'><span>Wind Speed: </span><span className='list__datos'> {weather?.wind.speed} m/s</span></li>
                    <li className='list__titulo'><span>Clouds: </span><span className='list__datos'> {weather?.clouds.all} %</span></li>
                    <li className='list__titulo'><span>pressure: </span><span className='list__datos'> {weather?.main.pressure} hPa</span></li>
                </ul>
            </section> 
        </div>
        <h2>{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit}°F`}</h2>
        <button className='button' onClick={handleChangeTemp}>{isCelsius ? 'change to °F' : 'change to °C'}</button>
    </article>
    
  )
  
}

export default WeatherCard
