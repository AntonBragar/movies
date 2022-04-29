import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import addToFavoritesReducer from "./favorites/favoriteSlice";
import addToLastSearchesReducer from "./searches/searchesSlice"

const rootReducer = combineReducers({
    favorite: addToFavoritesReducer,
    searches: addToLastSearchesReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;