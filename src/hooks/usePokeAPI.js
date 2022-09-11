import { useState, useEffect } from "react";
import { getPokemon } from "../api/pokemonAPI";

export const usePokeAPI = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemonData() {
            setTimeout(async () => {
                return getPokemon().then(
                    (response) => {
                        console.log(response);
                        setPokemon(response);
                    }
                )
            }, 4000);
        }
        getPokemonData();
    }, [])

    return [pokemon];
}

export default usePokeAPI;