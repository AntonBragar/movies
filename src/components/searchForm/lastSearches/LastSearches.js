import React, {useEffect, useRef, useState} from 'react';
import {getSearchedMoviesSelector} from "../../../redux/searches/searchesSelector";
import {useDispatch, useSelector} from "react-redux";
import {addLocalStorageSearchesToState, addSearchMovie} from "../../../redux/searches/searchesSlice";
import {nanoid} from 'nanoid';
import {LastSearchesWrapper} from "./LastSearchesStyled";

const LastSearches = () => {

    const reduxSearches = useSelector(getSearchedMoviesSelector)
    const localStSearches = JSON.parse(localStorage.getItem("last_searches"))
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStSearches && reduxSearches.length !== localStSearches.length) {
            dispatch(addLocalStorageSearchesToState(localStSearches))
        }
    }, [])

    const searchByLastSearch = (e) => {
        const {innerText: searchingMovie} = e.target;
        dispatch(addSearchMovie(searchingMovie));
    }

    return (
        <LastSearchesWrapper>
            <ul>
                {reduxSearches?.map(search => (
                    <li key={nanoid()} onClick={searchByLastSearch}>{search}</li>
                ))}
            </ul>
        </LastSearchesWrapper>
    );
};

export default LastSearches;