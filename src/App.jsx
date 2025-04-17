import { useFetchCharacter } from "./hooks/useFecthCharacters";
import "./App.css";

function App() {
  const urlPokemon = "https://pokeapi.co/api/v2/pokemon/1";
  const urlRick = "https://rickandmortyapi.com/api/character/1";
  const { character: pokemon, loading: pokemonLoading } =
    useFetchCharacter(urlPokemon);
  const { character: rickandmorty, loading: rickandmortyLoading } =
    useFetchCharacter(urlRick);

  return (
    <>
      <h2>Pokemon Data</h2>
      {pokemonLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
      <h2>Rick and Morty Data</h2>
      {rickandmortyLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{rickandmorty.name}</h2>
          <img src={rickandmorty.image} alt={rickandmorty.name} />
        </div>
      )}
    </>
  );
}

export default App;
