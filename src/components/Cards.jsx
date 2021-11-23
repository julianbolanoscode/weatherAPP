import React from 'react';
import Card from './Card.jsx';
import s from '../styles/Cards.module.css';

export default function Cards({ cities, onClose }) {
  if (cities) {
    return <div className={s.divCards}>
      {
        cities.map(c =>
          <Card
            max={c.max}
            id={c.id}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            key={c.id}
            temp={c.temp}
            country={c.country}
          />)
      }
    </div>
  } else {
    return (
      <div>No hay ciudades</div>
    )
  }

};