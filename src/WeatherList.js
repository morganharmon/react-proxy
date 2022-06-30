export default function WeatherList({ weather, city }) {
  return (
    <div className='list'>
      <h3>{city} Weather</h3>
      {
        weather.map((weath, i) => <div id='weather' key={weath.dt + i}>Forecast unix timestamp: {weath.dt}<br></br>Forecast temp: {weath.main.temp}°F</div>)
      }
    </div>
  );
}