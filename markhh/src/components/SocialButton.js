import React from "react";
import PropTypes from "prop-types";

const SocialButton = (props) => {
    return (
        <a
            href={props.link}
            className="m-1 inline-flex items-center rounded-md border border-[#212529]/80 bg-white px-3 py-1.5 text-[0.95rem] leading-5 text-[#212529] no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[#111827] hover:bg-[#212529] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1E2C]/30"
            target="_blank"
            id="social"
            rel="noopener noreferrer"
        >
            <code className="text-inherit [font-family:'Source_Code_Pro',monospace]">
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
