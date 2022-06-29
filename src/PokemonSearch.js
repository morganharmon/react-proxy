export default function PokemonSearch({ pokemonInput, setPokemonInput, pokemonSubmit }) {
  return (
    <div>
      <form onSubmit={pokemonSubmit}>
        <label>Pokemon: </label>
        <input value={pokemonInput} onChange={(e) => setPokemonInput(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
}