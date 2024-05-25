import React from "react";
import routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContextProvider";
import { signOutUser } from "../../context/appActionCreators";


const appRoutes = Object.entries(routes);

const Navbar = () => {
  const navigate = useNavigate();


  const {state, dispatch} = useAppContext()
  return (
    <nav>
      {state.isUserLoggedIn && <h1>Hello {state.user.userName} </h1>}
      {appRoutes.map((route) => {
        const [key, value] = route;

        if ((key ==='login' && state.isUserLoggedIn) || route[1] === routes.details) {
          return null;
        }

        return (
          <button
            key={key}
            onClick={() => {
              navigate(value);
            }}
          >
            {key}
          </button>
        );
      })}
      {state.isUserLoggedIn && (
        <button onClick={() => {
          dispatch(signOutUser());
        }}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
