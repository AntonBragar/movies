import {lazy} from "react";
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';



const routes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        icon: <HomeIcon/>,
        component: lazy(() => {
            return import("../pages/homePage/homiePage");
        })
    },
    {
        name: "Movies",
        path: "/movies",
        exact: true,
        icon: <MovieIcon/>,
        component: lazy(() => {
            return import("../pages/moviesPage/moviesPage");
        })
    },
    {
        name: "Favorites",
        path: "/favorites",
        exact: true,
        icon: <FavoriteIcon/>,
        component: lazy(() => {
            return import("../pages/favoritesPage/favoritesPage");
        })
    },
    {
        name: "",
        path: "/movies/:movieId",
        exact: false,
        component: lazy(() => {
            return import("../pages/movieDetailPage/movieDetailPage");
        })
    }
];

export default routes;