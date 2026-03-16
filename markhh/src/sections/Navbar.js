// import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../pages/HomePage";

const ROUTE_PATHS = ["/projects", "/gallery", "/"];

const Navbar = () => {
    return (
        <Router>
            <nav
                className="sticky top-0 z-50 select-none border-b border-white/10 bg-[#1D1E2C]/95 shadow-sm backdrop-blur"
            >
                <div className="mx-auto w-full max-w-[1320px] px-4">
                    {/* Brand Logo */}
                    <Link
                        className="inline-block py-3 text-[1.32rem] font-medium text-white/95 no-underline transition-colors hover:text-white"
                        name="About"
                        to={"/"}
                    >
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
