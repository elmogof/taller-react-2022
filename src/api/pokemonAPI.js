import axios from "axios";

export async function getPokemon() {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=9");
        return response.data.results;
    } catch (error) {
        console.log(error);
        return error;
    }
}