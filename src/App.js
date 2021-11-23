import React from 'react';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar';
import City from './components/City.jsx'
import About from './components/About.jsx'
import { useState } from 'react';
import { Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  const notify = (message) => toast.error(message);
  
  function onSearch(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then(response => {
        if (response.main !== undefined) {
          const city = {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon,
            country: response.sys.country
          };
          let equals = false
          cities.forEach(i => {
            if (i.id === city.id) equals = true
          })
          if (equals === true) {
            notify("The city is already on screen");
          } else {
            setCities(oldCities => [...oldCities, city]);
          }

        } else {
          notify("City no found")
        }
      }).catch(e => console.log(e));
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  function onFilter(cityId) {
    let ciudad = cities.filter((c) => c.id === parseInt(cityId));
    if (ciudad.length > 0) {
      return ciudad[0]
    } else {
      return null
    }

  }


  return (
    <div className="App">
      <div>
        <Route exact path={"/"} render={() => <SearchBar onSearch={onSearch} />} />
      </div>
      <hr />
      <div>
        <Route exact path={"/"} render={() => <Cards cities={cities} onClose={onClose} />} />
      </div>
      <Route exact path={"/about"} render={() => <About />} />
      <Route path={"/city/:cityId"} render={({ match }) => <City city={onFilter(match.params.cityId)} />} />
      <Toaster />
    </div>
  );
}

export default App;
