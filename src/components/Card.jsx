import React from 'react';
import s from '../styles/Card.module.css';
import { Link } from 'react-router-dom';



export default function Card(props) {
  // acá va tu código
  return <div className={s.cardDiv}>
    <div className={s.containerbtnExit}><button onClick={props.onClose} className={s.btnExitcard}>x</button></div>
    <h1>{props.name}</h1>
    <h5>{props.country}</h5>
    <div className={s.containerIcon}>
      <div className={s.containerI}><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" /></div>
      <div className={s.containerT}><h1>{Math.trunc(props.temp)}°</h1></div>
    </div>

    <div className={s.containerMaxmin}>
      <div className={s.containerMax}>
        <h3>Min</h3>
        <h3>{Math.trunc(props.min)}°</h3>
      </div>
      <div className={s.containerMin}>
        <h3>Max</h3>
        <h3>{props.max}°</h3>
      </div>
      <div className={s.containerDetails}>
        <Link to={`/city/${props.id}`}>Details</Link>
      </div>

    </div>



  </div>
};