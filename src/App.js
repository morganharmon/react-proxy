import './App.css';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import PokemonList from './PokemonList';
import BusinessesList from './BusinessesList';
import WeatherList from './WeatherList';
import { useState } from 'react';
import { getPokemon } from './services/fetch-utils';

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
    console.log(response);
    setPokemon(response.results);
    setPokemonInput('');
  }

  return (
    <div className="App">
      <section id='searches'>
        <PokemonSearch pokemonInput={pokemonInput} setPokemonInput={setPokemonInput} pokemonSubmit={pokemonSubmit} />
        <YelpSearch yelpInput={yelpInput} />
        <WeatherSearch weatherInput={weatherInput} />
      </section>
      <section id='lists'>
        <PokemonList pokemon={pokemon} />
        <BusinessesList />
        <WeatherList />
      </section>
    </div>
  );
}

export default App;
