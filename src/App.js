
// import HomePageHeader from "./components/HomePageHeader";
// import GenericHeader from "./components/GenericHeader";
import useContador from "./hooks/useContador";

const App = () => {

  const [number, aumentar, reiniciar, reducir] = useContador();

  return (
    <div className='container'>
      <h1>{number}</h1>

      <button onClick={aumentar}>
        <span>Aumentar</span>
      </button>
      <button onClick={reiniciar}>
        <span>Reiniciar</span>
      </button>
      <button onClick={reducir}>
        <span>Reducir</span>
      </button>
    </div>
  );
}

export default App;
