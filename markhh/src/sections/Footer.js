import React from "react";

const Footer = () => {
    return (
        <footer className="mt-5 footer user-select-none">
            <div style={{ height: 70 }}></div>
            <hr className="mt-auto mx-5"></hr>
            <div className="container d-flex flex-row justify-content-center">
                <p
                    className="fw-light badge text-wrap text-muted"
                    style={{ fontFamily: "Source Code Pro" }}
                >
                    MARK H. HUANG © 2024. ALL RIGHTS RESERVED. LAST UPDATED: JUL 2024.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
