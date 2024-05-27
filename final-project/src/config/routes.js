
import AuthGuard from '../Guard/AuthGuard';
import GuestGuard from '../Guard/GuestGuard';
import appRoutes from '../constants/routes';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Movies from '../pages/movies/Movies';
import MovieDetails from '../pages/movieDetails/MovieDetails';

const routes = [
   {
     path:appRoutes.home,
     Component: Home,
   },
   {
     path:appRoutes.movies,
     Component: Movies,
     Guard: AuthGuard,
   },
   {
     path:appRoutes.details,
     Component: MovieDetails,
     Guard: AuthGuard,
   },
   {
    path:appRoutes.register,
    Component: Register,
  },
  {
    path:appRoutes.login,
    Component: Login,
    Guard: GuestGuard,
  },
]

export default routes;