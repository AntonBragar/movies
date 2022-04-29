import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MovieDetailWrapper} from "./MovieDetailStyled";

const URL = `https://api.themoviedb.org`;
const API_KEY = `3c3f31939cc89ca41e272b4d5922ad13`;

const MovieDetailPage = (props) => {

    const [movie, setMovie] = useState(null);

    const getMovieInfo = async () => {
        const {movieId} = props.match.params;
        try {
            const {data} = await axios.get(`${URL}/3/movie/${movieId}?api_key=${API_KEY}`);
            setMovie(data);
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getMovieInfo();
    }, [])

    return (
        movie && (
            <MovieDetailWrapper>
                <div className="container">
                    <div className="wrapper">
                        <h1 className="title">{movie.title}</h1>
                        <div className="movie-description">
                            <img className="poster" src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png`} alt=""/>
                            <div className="overview">
                                <h2>Overview</h2>
                                {movie.overview ? <h4>{movie.overview}</h4> : null}
                                {movie.budget ? <h4>Budget: <span>{movie.budget}$</span></h4> : null}
                                <h3>Genres:</h3>
                                {movie.genres ? <ul className="genres">
                                    {movie?.genres.map(genre => (
                                        <li className="genre" key={genre.id}>{genre.name}</li>
                                    ))}
                                </ul> : null}
                                {movie.release_date ? <p>Release Date: {movie.release_date}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </MovieDetailWrapper>
        )
    );
};

export default MovieDetailPage;