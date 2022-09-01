import { useState } from 'react';

const useContador = () => {
    const [number, setNumber] = useState(0);

    function aumentar() {
        setNumber(number + 1);
        console.log("El valor de number es: ", number);
    }

    function reiniciar() {
        setNumber(0);
        console.log("El valor de number es: ", number);
    }

    function reducir() {
        setNumber(number - 1);
        console.log("El valor de number es: ", number);
    }
    return [number, aumentar, reiniciar, reducir];
}

export default useContador