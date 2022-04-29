import {createSlice} from "@reduxjs/toolkit";


const searchesSlice = createSlice({
    name: "searches",
    initialState: {
        searchMovie: "",
        searchedMovies: [],
    },
    reducers: {
        addSearchMovie(state, {payload}) {
            state.searchMovie = payload;
        },
        addLocalStorageSearchesToState(state, {payload}) {
            payload.forEach(search => state.searchedMovies.push(search));
            localStorage.setItem('last_searches', JSON.stringify(state.searchedMovies));
        },
        addSearchedMovies(state, {payload}) {
            if (state.searchedMovies.length >= 5) state.searchedMovies.splice(0, 1);
            state.searchedMovies.push(payload);
            localStorage.setItem('last_searches', JSON.stringify(state.searchedMovies))
        },
    }
})

export const {addSearchMovie, addSearchedMovies, addLocalStorageSearchesToState} = searchesSlice.actions;
export default searchesSlice.reducer;