import React, {useState} from 'react';
import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch} from "react-redux";
import {addSearchedMovies, addSearchMovie} from "../../redux/searches/searchesSlice";


const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#fff",
        },
    },
});

const SearchForm = () => {

    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSearchMovie(input))
        dispatch(addSearchedMovies(input))
    }

    return (
            <form onSubmit={handleSubmit} className="SearchForm">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="searchBox"
                        label="Search"
                        variant="filled"
                        onChange={handleChange}
                        type="text"
                        placeholder="Search your movies"
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        // style={{marginLeft: 10}}
                        >
                        <SearchIcon fontSize="large"/>
                    </Button>
                </ThemeProvider>
            </form>
    );
};

export default SearchForm;