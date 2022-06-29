export default function WeatherSearch({ weatherInput, setWeatherInput, weatherSubmit }) {
  return (
    <div>
      <form onSubmit={weatherSubmit}>
        <label>City: </label>
        <input value={weatherInput} onChange={(e) => setWeatherInput(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
}