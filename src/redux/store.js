import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import pokemonSlice from "./slices/pokemonSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        pokemon: pokemonSlice,
    }
});