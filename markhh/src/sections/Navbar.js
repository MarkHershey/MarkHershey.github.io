// import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../pages/HomePage";

const ROUTE_PATHS = ["/projects", "/gallery", "/"];

const Navbar = () => {
    return (
        <Router>
            <nav
                className="sticky top-0 z-50 select-none border-b border-[#2D3A4D]/45 bg-[#202838]/95 shadow-sm backdrop-blur"
            >
                <div className="mx-auto w-full max-w-[1320px] px-4">
                    {/* Brand Logo */}
                    <Link
                        className="inline-block py-3 text-[1.32rem] font-medium text-white/92 no-underline transition-colors hover:text-white"
                        name="About"
                        to={"/"}
                    >
                        Mark He Huang
                    </Link>
                </div>
            </nav>

            <main>
                <Switch>
                    {ROUTE_PATHS.map((routePath) => (
                        <Route key={routePath} path={routePath} component={HomePage} />
                    ))}
                </Switch>
            </main>
        </Router>
    );
};

export default Navbar;
