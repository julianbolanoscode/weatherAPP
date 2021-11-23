import React from 'react'
import s from '../styles/City.module.css';
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className={s.containerCity}>
            <div className={s.cardDiv}>
                <h2>Weather APP</h2>
                <h3>Weather query application</h3>
                <h4>Technologies used:</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>React router</li>
                </ul>
                <h5>Create by Julián Bolaños</h5>
                <a href="https://www.linkedin.com/in/julianbolanoscode">Linkedin</a>
                <div className={s.containerBack}>
                    <Link to={"/"}>Back</Link>
                </div>
            </div>

        </div>
    )
}