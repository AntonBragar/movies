import React, {useEffect, useState} from 'react';
import axios from "axios";
import TendingMovies from "./TendingMovies";
import {withRouter} from "react-router-dom";
import CustomPagination from "../../components/pagination/CustomPagination";
import {Button} from "@mui/material";
import MovieList from "../../components/movie/movie-list/MovieList";


const URL = `https://api.themoviedb.org`;
const API_KEY = `3c3f31939cc89ca41e272b4d5922ad13`;

const HomiePage = () => {
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();

    const fetchData = async () => {
        try {
            const {data} = await axios.get(`${URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`)
            const {results, total_pages} = data;
            setMovies(results)
            setNumOfPages(total_pages);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [page])

    const showMovies = () => {
        return setShow(!show);
    }

    return (
        <>
            <h1 style={{display: "flex", justifyContent: "center"}}>Trending Movies</h1>
            <div style={{display: "flex", justifyContent: "center", paddingTop: "50px"}}>
                <Button variant="contained" color="success" onClick={showMovies}
                        >
                    Show Movies
                </Button>
            </div>
            {/*<button onClick={showMovies}>Show Data</button>*/}
            {/*{show ? <TendingMovies movies={movies}/> : null}*/}
            {show ? <MovieList movies={movies}/> : null}
            {show ? <CustomPagination setPage={setPage} numOfPages={numOfPages}/> : null}
        </>
    );
};

export default withRouter(HomiePage);