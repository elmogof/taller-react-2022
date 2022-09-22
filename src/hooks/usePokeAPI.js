import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../redux/slices/pokemonSlice";

export const usePokeAPI = () => {
    const dispatch = useDispatch();
    const { pokemonList, status } = useSelector(state => state.pokemon);

    const fetchPokemonAsync = () => {
        setTimeout(() => {
            dispatch(fetchPokemon());
        }, 4000);
    }

    useEffect(() => {
        fetchPokemonAsync();
    }, [])

    return [pokemonList, status];
}

export default usePokeAPI;