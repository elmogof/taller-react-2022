// import HomePageHeader from "./components/HomePageHeader";
// import GenericHeader from "./components/GenericHeader";
import { useState } from 'react';
import useContador from "./hooks/useContador";
// import usePokeAPI from "./hooks/usePokeAPI";

const App = () => {

  const [number, incrementar, reiniciar, reducir, aumentarPorCantidad] = useContador();
  const [inputValue, setInputValue] = useState(0);
  // const [pokemon] = usePokeAPI();

  return (
    <>
      <div className='container'>
        <div className="d-flex flex-column align-items-center justify-content-center container-height">

          {/* {
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
          } */}

          <h1 className="text-primary">{number}</h1>
          <button className='text-white bg-success' onClick={incrementar}>
            <span>Aumentar</span>
          </button>
          <button className='text-dark bg-warning' onClick={reiniciar}>
            <span>Reiniciar</span>
          </button>
          <button className='text-white bg-danger' onClick={reducir}>
            <span>Reducir</span>
          </button>
          <button className='text-white bg-success' style={{ width: '200px' }} onClick={() => aumentarPorCantidad(5)}>
            Aumentar en 5
          </button>

          <div className="d-flex">
            <button className='text-white bg-success' onClick={() => {
              if (inputValue > 0) {
                aumentarPorCantidad(inputValue);
                setInputValue(0);
              }
            }}>
              Aumentar
            </button>
            <input type="number" value={inputValue} onChange={(e) => {
              var number = parseInt(e.target.value);
              setInputValue(number)
            }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
