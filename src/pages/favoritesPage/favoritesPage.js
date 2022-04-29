import React from 'react';
import {useSelector} from "react-redux";
import {favoriteSelector} from "../../redux/favorites/favoriteSelector";
import MovieList from "../../components/movie/movie-list/MovieList";

const FavoritesPage = () => {
    const favoritesMovies = useSelector(favoriteSelector);

    return (
        <>
            <MovieList movies={favoritesMovies}/>
        </>
    )
};

export default FavoritesPage;