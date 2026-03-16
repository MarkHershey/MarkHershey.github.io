// import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../pages/HomePage";

const ROUTE_PATHS = ["/projects", "/gallery", "/"];

const Navbar = () => {
    return (
        <Router>
            <nav
                className="navbar navbar-expand-sm navbar-dark shadow sticky-top user-select-none"
                style={{ minWidth: 400, backgroundColor: "#1D1E2C" }}
            >
                <div className="container">
                    {/* Brand Logo */}
                    <Link
                        className="navbar-brand"
                        name="About"
                        to={"/"}
                    >
                        {/* <img
                            className="d-inline-block align-text-top rounded me-2"
                            src="https://avatars0.githubusercontent.com/u/25876605?s=460&v=4"
                            alt=""
                            width="30"
                            height="30"
                        /> */}
                        Mark He Huang
                    </Link>
                </div>
            </nav>

            <Switch>
                {ROUTE_PATHS.map((routePath) => (
                    <Route key={routePath} path={routePath} component={HomePage} />
                ))}
            </Switch>
        </Router>
    );
};

export default Navbar;
