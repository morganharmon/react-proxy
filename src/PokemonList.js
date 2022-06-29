export default function PokemonList({ pokemon }) {
  return (
    <div>
      {
        pokemon.map((poke, i) => <div key={ poke.pokemon + i} >{poke.pokemon}</div>)
      }
    </div>
  );
}