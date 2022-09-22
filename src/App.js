// import ContadorBody from "./components/ContadorBody";
import usePokeAPI from "./hooks/usePokeAPI";

const App = () => {
  const [pokemonList, status] = usePokeAPI();

  return (
    <>
      <div className='container'>
        <div className="d-flex flex-column align-items-center justify-content-center container-height">
          {/* <ContadorBody /> */}
          {
            status !== "idle" ? (
              pokemonList.map((pokemon, index) => {
                return (
                  <div key={index} className="border-bottom mb-3 d-flex align-items-center">
                    <h3 className="pe-2">{pokemon.name}</h3>
                    <a href={pokemon.url} target="_blank" rel="noreferrer">Ver más...</a>
                  </div>
                )
              })
            ) : (
              <h2>Cargando...</h2>
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
