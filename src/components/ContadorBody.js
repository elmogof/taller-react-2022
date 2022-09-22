import { useState } from 'react';
import useContador from "../hooks/useContador";

const ContadorBody = () => {
    const [number, incrementar, reiniciar, reducir, aumentarPorCantidad] = useContador();
    const [inputValue, setInputValue] = useState(0);
    return (
        <>
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
        </>
    )
}

export default ContadorBody