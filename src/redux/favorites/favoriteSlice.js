import {createSlice, current} from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addToFavorites(state, {payload}) {
            // state = [...state, payload]
            state.push(payload);
            localStorage.setItem("favorites", JSON.stringify(state));
        },
        addLocalStorageFavoritesToState(state, {payload}) {
            payload.forEach(movie => state.push(movie))
            localStorage.setItem('favorites', JSON.stringify(state))
        },
        deleteFavorite(state, {payload}) {
            state = current(state).filter(({id}) => id !== payload);
            localStorage.setItem("favorites", JSON.stringify(state));
            return state;
        },
    }
})

export const {addToFavorites, deleteFavorite, addLocalStorageFavoritesToState} = favoriteSlice.actions;
export default favoriteSlice.reducer;