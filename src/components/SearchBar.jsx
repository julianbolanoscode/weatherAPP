import React from 'react';
import { useState } from 'react'
import e from '../styles/SearchBar.module.css';
import { Link } from 'react-router-dom'
export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("");

  return (
    <div className={e.containerSearchBar}>
      <form onSubmit={(e) => { e.preventDefault(); onSearch(city); setCity(""); }}>
        <i className="icono fas fa-search"></i>
        <input type="text" value={city} className={e.inputSearch} placeholder="Write your city" onChange={e => setCity(e.target.value)}></input>
      </form>
      <Link to={"/about"}><i className="far fa-address-card"></i></Link>
    </div>
  )
};