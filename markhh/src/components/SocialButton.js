import React from "react";
import PropTypes from "prop-types";

const SocialButton = (props) => {
    return (
        <a
            href={props.link}
            className="m-1 inline-flex items-center rounded-md border border-[#9eacbc] bg-white px-3 py-1.5 text-[0.95rem] leading-5 text-[#45586c] no-underline transition-colors duration-150 hover:border-[#7f91a5] hover:bg-[#edf2f7] hover:text-[#1f2a37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b5b84]/20"
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
