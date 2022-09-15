import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        incrementar: (state) => {
            state.number += 1;
        },
        reducir: (state) => {
            state.number -= 1;
        },
        reiniciar: (state) => {
            state.number = 0;
        },
        aumentarPorCantidad: (state, action) => {
            state.number += action.payload;
        }
    }
});

export const { incrementar, reducir, reiniciar, aumentarPorCantidad } = counterSlice.actions;

export default counterSlice.reducer;

