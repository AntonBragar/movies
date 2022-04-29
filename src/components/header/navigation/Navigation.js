import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import routes from "../../../routes/routes";
import {NavigationContainer} from "./NavigationStyled";

const Navigation = ({location}) => {
    return (
        <NavigationContainer>
            <ul className="list">
                {routes.map(route => (
                    <li className="listItem" key={route.path}>
                        <NavLink to={{
                            pathname: route.path,
                        }}
                                 className="link"
                                 activeClassName="activeLink"
                                 exact={route.exact}
                        >
                            {/*{route.name}*/}
                            {route.icon}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </NavigationContainer>
    );
};

export default withRouter(Navigation);