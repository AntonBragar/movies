import React from 'react';
import {Link} from "react-router-dom";
import AddToFavorite from "../../components/addToFavorites/addToFavorite";
import {MoviesWrapper} from "../../components/movie/MoviesStyled";

const TendingMovies = ({movies}) => {
    return (
        <MoviesWrapper>
            <h1>Trending Movies</h1>
            <ul className="ImageGallery">
                {movies?.map(movie => (
                    <li className="movie" key={movie.id}>
                        <Link className="ImageGalleryItem-link"
                              to={{
                                  pathname: `movies/${movie.id}`,
                                  state: {from: "/"}
                              }}
                        >
                            <img
                                className="ImageGalleryItem-image"
                                width="200"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <p className="title">{movie.title}</p>
                        </Link>
                        <AddToFavorite movie_data={movie}/>
                    </li>
                ))}
            </ul>
        </MoviesWrapper>
    );
};

export default TendingMovies;