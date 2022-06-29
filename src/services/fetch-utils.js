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