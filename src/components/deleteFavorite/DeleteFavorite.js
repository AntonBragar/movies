import React from 'react';
import {deleteFavorite} from "../../redux/favorites/favoriteSlice";
import {useDispatch, useSelector} from "react-redux";
import {favoriteSelector} from "../../redux/favorites/favoriteSelector";
import DeleteOutlinedIcon from '@mui/icons-material/Delete';

const DeleteFavorite = ({movie_data}) => {

    const favoritesMovies = useSelector(favoriteSelector);
    const dispatch = useDispatch();

    const deleteHandler = () => {
        const {id} = movie_data;
        dispatch(deleteFavorite(id));
    }

    return (
        <div className="favorite-delete">
            <button className="delete" onClick={deleteHandler}><DeleteOutlinedIcon fontSize="medium" color="warning"/></button>
        </div>
    );
};

export default DeleteFavorite;