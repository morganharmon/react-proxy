export default function WeatherSearch({ weatherInput, setWeatherInput, weatherSubmit }) {
  return (
    <div>
      <form onSubmit={weatherSubmit}>
        <label>Weather in this city: </label>
        <input value={weatherInput} onChange={(e) => setWeatherInput(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
}