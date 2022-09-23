import React from "react";
import PropTypes from "prop-types";

const SectionTitle = (props) => {
    return (
        <h3 className="mb-3" style={{ color: "#3c3f5d" }}>
            {props.title}
        </h3>
    );
};

SectionTitle.defaultProps = {
    title: "Section Title",
};
SectionTitle.propTypes = {
    title: PropTypes.string,
};

export default SectionTitle;
