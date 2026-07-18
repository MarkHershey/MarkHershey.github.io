import React from "react";
import PropTypes from "prop-types";

const SectionTitle = (props) => {
    return (
        <h2 className="mb-5 text-[1.65rem] leading-[1.1] font-semibold tracking-[-0.015em] text-[#2b3648] sm:text-[1.8rem]">
            {props.title}
        </h2>
    );
};

SectionTitle.defaultProps = {
    title: "Section Title",
};
SectionTitle.propTypes = {
    title: PropTypes.string,
};

export default SectionTitle;
