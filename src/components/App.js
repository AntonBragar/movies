import React, {useEffect} from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import {useDispatch, useSelector} from "react-redux";
import {favoriteSelector} from "../redux/favorites/favoriteSelector";
import {addLocalStorageFavoritesToState, addToFavorites} from "../redux/favorites/favoriteSlice";

const App = () => {

    const reduxMovies = useSelector(favoriteSelector);
    const localStMovies = JSON.parse(localStorage.getItem('favorites'));
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStMovies && reduxMovies.length !== localStMovies.length) {
            dispatch(addLocalStorageFavoritesToState(localStMovies))
        }
    }, []);

    return (
        <>
            <Header/>
            <Main/>
        </>
    );
};

export default App;