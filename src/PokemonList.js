export default function PokemonList({ pokemon }) {
  return (
    <div className='list'>
      <h3>Pokemon</h3>
      {
        pokemon.map((poke, i) => <div key={ poke.pokemon + i} >{poke.pokemon}</div>)
      }
    </div>
  );
}