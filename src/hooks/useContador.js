import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reducir, reiniciar, aumentarPorCantidad } from '../redux/slices/counterSlice';

const useContador = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();

    function incrementarValor() {
        dispatch(incrementar());
        console.log("El valor de number es: ", number);
    }

    function reiniciarValor() {
        dispatch(reiniciar());
        console.log("El valor de number es: ", number);
    }

    function reducirValor() {
        dispatch(reducir());
        console.log("El valor de number es: ", number);
    }

    function aumentarPorCantidadValor(cantidad) {
        dispatch(aumentarPorCantidad(cantidad));
        console.log("El valor de number es: ", number);
    }

    return [number, incrementarValor, reiniciarValor, reducirValor, aumentarPorCantidadValor];
}

export default useContador