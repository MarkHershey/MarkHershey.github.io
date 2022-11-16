// import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../pages/HomePage";

const Navbar = () => {
    const handleNavOnClick = () => { };

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
                        onClick={handleNavOnClick}
                        to={"/"}
                    >
                        <img
                            className="d-inline-block align-text-top rounded me-2"
                            src="https://avatars0.githubusercontent.com/u/25876605?s=460&v=4"
                            alt=""
                            width="30"
                            height="30"
                        />
                        @markhh
                    </Link>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse mw-auto" id="navbarNav">
                        <ul className="navbar-nav mw-auto">
                            <li className="nav-item">
                                <Link className={"nav-link"} name="About" onClick={handleNavOnClick} to={"/"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} name="Projects" onClick={handleNavOnClick} to={"/projects"}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} name="Gallery" onClick={handleNavOnClick} to={"/gallery"}>Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link"} name="Docs" onClick={handleNavOnClick} href="/">Docs</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>

            <Switch>
                <Route path={"/projects"} component={HomePage} />
                <Route path={"/gallery"} component={HomePage} />
                <Route path={"/"} component={HomePage} />
            </Switch>
        </Router>
    );
};

export default Navbar;
