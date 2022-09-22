import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon } from '../../api/pokemonAPI';

const initialState = {
    pokemonList: [],
    status: 'idle',
}

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async () => {
        const response = await getPokemon();
        return response;
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    extraReducers: {
        [fetchPokemon.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchPokemon.fulfilled]: (state, action) => {
            state.pokemonList = action.payload;
            state.status = 'success';
        },
        [fetchPokemon.rejected]: (state) => {
            state.status = 'failed';
        }
    }
})

export default pokemonSlice.reducer;
