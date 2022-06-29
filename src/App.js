import './App.css';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import PokemonList from './PokemonList';
import BusinessesList from './BusinessesList';
import WeatherList from './WeatherList';
import { useState } from 'react';
import { getPokemon, getYelp, getLocation, getWeather } from './services/fetch-utils';

function App() {
  const [pokemonInput, setPokemonInput] = useState('');
  const [yelpInput, setYelpInput] = useState('');
  const [weatherInput, setWeatherInput] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [weather, setWeather] = useState([]);

  async function pokemonSubmit(e) {
    e.preventDefault();
    const response = await getPokemon(pokemonInput);
    setPokemon(response.results);
    setPokemonInput('');
  }

  async function yelpSubmit(e) {
    e.preventDefault();
    const response = await getYelp(yelpInput);
    setBusinesses(response.businesses);
    setYelpInput('');
  }

  async function weatherSubmit(e) {
    e.preventDefault();
    const response = await getLocation(weatherInput);
    const response2 = await getWeather(response);
    setWeather(response2.list);
    setWeatherInput('');
  }

  return (
    <div className="App">
      <section id='searches'>
        <PokemonSearch pokemonInput={pokemonInput} setPokemonInput={setPokemonInput} pokemonSubmit={pokemonSubmit} />
        <YelpSearch yelpInput={yelpInput} setYelpInput={setYelpInput} yelpSubmit={yelpSubmit} />
        <WeatherSearch weatherInput={weatherInput} setWeatherInput={setWeatherInput} weatherSubmit={weatherSubmit} />
      </section>
      <section id='lists'>
        <PokemonList pokemon={pokemon} />
        <BusinessesList businesses={businesses} />
        <WeatherList weather={weather} />
      </section>
    </div>
  );
}

export default App;
