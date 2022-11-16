import React from "react";
import PropTypes from "prop-types";

const SocialButton = (props) => {
    return (
        <a
            href={props.link}
            className="m-1 py-1 px-2 btn btn-outline-dark"
            target="_blank"
            id="social"
            rel="noopener noreferrer"
        >
            <code className="" style={{ fontFamily: "Source Code Pro" }}>
                {props.name}
            </code>
        </a>
    );
};

SocialButton.defaultProps = {
    name: "N.A.",
    link: "/",
};

SocialButton.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
};

export default SocialButton;
