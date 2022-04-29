import React from 'react';
import {Link, useLocation} from "react-router-dom";
import AddToFavorite from "../../addToFavorites/addToFavorite";
import {MoviesWrapper} from "../MoviesStyled";
import DeleteFavorite from "../../deleteFavorite/DeleteFavorite";

const MovieItem = ({movie}) => {

    const location = useLocation();

    return (
        <MoviesWrapper>
            <li className="movie" key={movie.id}>
                <Link className="link"
                      to={{
                          pathname: `movies/${movie.id}`,
                          state: {from: "/"}
                      }}
                >
                    <div className="movie-img">
                    <img
                        width="200"
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png`}
                        alt={movie.title}
                    />
                    </div>
                    <p className="title">{movie.title}</p>
                </Link>
                {location.pathname === "/favorites" ?
                    <DeleteFavorite movie_data={movie}/> :
                    <AddToFavorite movie_data={movie}/>}
            </li>
        </MoviesWrapper>
    );
};

export default MovieItem;