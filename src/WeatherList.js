export default function WeatherList({ weather }) {
  return (
    <div>
      {
        weather.map((weath, i) => <div key={weath.dt + i} weath={weath}>{weath.main.temp}</div>)
      }
    </div>
  );
}