export async function getPokemon(pokemonInput) {
  const rawData = await fetch(`/.netlify/functions/pokemon?pokeQuery=${pokemonInput}`);
  const data = await rawData.json();
  return data;
}

export async function getYelp(yelpInput) {
  const rawData = await fetch(`/.netlify/functions/yelp?location=${yelpInput}`);
  const data = await rawData.json();
  return data;
}

export async function getLocation(weatherInput) {
  const rawData = await fetch(`/.netlify/functions/location?q=${weatherInput}`);
  const data = await rawData.json();
  return data;
}

export async function getWeather(location) {
  const rawData = await fetch(`/.netlify/functions/weather?lat=${location[0].lat}&lon=${location[0].lon}`);
  const data = await rawData.json();
  return data;
}