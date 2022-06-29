export default function PokemonSearch({ pokemonInput }) {
  return (
    <div>
      <form>
        <label>Pokemon: </label>
        <input value={pokemonInput} />
        <button>Search</button>
      </form>
    </div>
  );
}