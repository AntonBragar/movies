import React, {useEffect, useState} from 'react';
import axios from "axios";
import CustomPagination from "../../components/pagination/CustomPagination";
import "./moviesPage.css";
import MovieList from "../../components/movie/movie-list/MovieList";
import SearchForm from "../../components/searchForm/SearchForm";
import LastSearches from "../../components/searchForm/lastSearches/LastSearches";
import {getSearchedMovieSelector} from "../../redux/searches/searchesSelector";
import {useSelector} from "react-redux";

const URL = `https://api.themoviedb.org`;
const API_KEY = `3c3f31939cc89ca41e272b4d5922ad13`;

const MoviesPage = (props) => {

    const searchMovie = useSelector(getSearchedMovieSelector);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();

    const getMovies = async () => {
        try {
            const {data} = await axios.get(`${URL}/3/search/movie?api_key=${API_KEY}&page=${page}&query=${searchMovie}`)
            setMovies(data.results);
            setNumOfPages(data.total_pages);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (searchMovie && page >= 1) {
            getMovies();
        }
    }, [page, searchMovie])

    return (
        <div style={{paddingTop: "20px"}}>
            <SearchForm/>
            <LastSearches/>
            <MovieList movies={movies}/>
            {movies.length > 0 ? <CustomPagination setPage={setPage} numOfPages={numOfPages}/> : null}
        </div>
    );
};

export default MoviesPage;