// import HomePageHeader from "./components/HomePageHeader";
// import GenericHeader from "./components/GenericHeader";
// import useContador from "./hooks/useContador";
import usePokeAPI from "./hooks/usePokeAPI";

const App = () => {

  // const [number, aumentar, reiniciar, reducir] = useContador();
  const [pokemon] = usePokeAPI();

  return (
    <>
      <div className='container'>
        <div className="d-flex flex-column align-items-center justify-content-center container-height">

          {
            pokemon.length > 0 ? (
              pokemon.map((pokemon, index) => {
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

          {/* <h1 className="text-primary">{number}</h1>
          <button onClick={aumentar}>
            <span>Aumentar</span>
          </button>
          <button onClick={reiniciar}>
            <span>Reiniciar</span>
          </button>
          <button onClick={reducir}>
            <span>Reducir</span>
          </button> */}
        </div>
      </div>
    </>
  );
}

export default App;
