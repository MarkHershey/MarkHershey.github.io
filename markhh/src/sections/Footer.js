import React from "react";

const Footer = () => {
    return (
        <footer className="mt-5 footer user-select-none">
            <div className="container d-flex flex-row justify-content-center d-none">
                <a href="https://clustrmaps.com/site/1c19b"><img src="//clustrmaps.com/map_v2.png?cl=080808&w=300&t=n&d=mimMKRAAli-zSS2UDdRbmlLd_oFy2cp_BCUeqsLi8sg&co=ffffff&ct=808080" alt="none" /></a>
            </div>

            <div style={{ height: 70 }}></div>
            <hr className="mt-auto mx-5"></hr>
            <div className="container d-flex flex-row justify-content-center">
                <p
                    className="fw-light badge text-wrap text-muted"
                    style={{ fontFamily: "Source Code Pro" }}
                >
                    MARK H. HUANG © 2025. ALL RIGHTS RESERVED. LAST UPDATED: SEP 2025.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
