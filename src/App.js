import './App.css';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import PokemonList from './PokemonList';
import BusinessesList from './BusinessesList';
import WeatherList from './WeatherList';
import { useState } from 'react-router-dom';

function App() {
  const [pokemonInput, setPokemonInput] = useState('');
  const [yelpInput, setYelpInput] = useState('');
  const [weatherInput, setWeatherInput] = useState('');

  return (
    <div className="App">
      <section id='searches'>
        <PokemonSearch pokemonInput={pokemonInput} />
        <YelpSearch yelpInput={yelpInput} />
        <WeatherSearch weatherInput={weatherInput} />
      </section>
      <section id='lists'>
        <PokemonList />
        <BusinessesList />
        <WeatherList />
      </section>
    </div>
  );
}

export default App;
