import React from 'react'
import s from '../styles/City.module.css';
import { Link } from 'react-router-dom'


export default function City({ city }) {
    if (!city) {
        alert('La ciudad no existe');


    }
    return (
        <>

            <div className={s.containerCity}>
                <div className={s.cardDiv}>
                    <h1>{city.name}</h1>
                    <h3>Temperature: {city.temp} ºC</h3>
                    <h3>Weather: {city.weather}</h3>
                    <h3>Wind: {city.wind} km/h</h3>
                    <h3>Clouds: {city.clouds}</h3>
                    <h3>Latitude: {city.latitud}º</h3>
                    <h3>Longitude: {city.longitud}º</h3>
                    <div className={s.containerBack}></div>
                    <Link to={"/"}>Back</Link>
                </div>
            </div>
        </>

    )
}