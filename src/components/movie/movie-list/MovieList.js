import React from 'react';
import MovieItem from "../movie-item/MovieItem";
import {MoviesWrapper} from "../MoviesStyled";

const MovieList = ({movies}) => {
    return (
        <MoviesWrapper>
            <ul className="gallery">
                {movies.map(movie => (
                    <MovieItem movie={movie} key={movie.id}/>
                ))}
            </ul>
        </MoviesWrapper>
    );
};

export default MovieList;