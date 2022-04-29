import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToFavorites} from "../../redux/favorites/favoriteSlice";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import swal from 'sweetalert'


const AddToFavorite = ({movie_data}) => {

    const [fill, setFill] = useState(false);
    const dispatch = useDispatch();

    const localFavoritesMovies = JSON.parse(localStorage.getItem('favorites'));

    useEffect(() => {
        const movie = localFavoritesMovies?.find(({id}) => id === movie_data.id)
        if (movie) setFill(true);
    }, [])

    const addToFavoriteHandler = () => {
        const movie = localFavoritesMovies?.find(({id}) => id === movie_data.id)
        if (movie) return swal("Attention!", "This movie is already in Favorites", "info");
        setFill(true);
        dispatch(addToFavorites(movie_data));
    }

    return (
        <div className="favorite">
            <button className="like" onClick={addToFavoriteHandler}>{fill ? <FavoriteOutlinedIcon color="warning"/> : <FavoriteBorderOutlinedIcon color="warning"/>}</button>
        </div>
    );
};

export default AddToFavorite;