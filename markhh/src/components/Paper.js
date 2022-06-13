import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { CodeBlock, monokai } from "react-code-blocks";

const Paper = (props) => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const [citation, setCitation] = useState(false);

    const toggleCitation = () => {
        copyToClipboard(props.cite);

        if (citation) {
            setCitation(false);
        } else {
            setCitation(true);
        }
    };

    const getHighlightedText = (text, highlight) => {
        // Ref: https://stackoverflow.com/a/43235785
        // Split on highlight term and include term into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, "gi"));
        return (
            <span>
                {" "}
                {parts.map((part, i) => (
                    <span
                        key={i}
                        style={
                            part.toLowerCase() === highlight.toLowerCase()
                                ? { fontWeight: "bold" }
                                : {}
                        }
                    >
                        {part}
                    </span>
                ))}{" "}
            </span>
        );
    };

    return (
        <div
            className="shadow-sm p-3 my-2 bg-light rounded"
            style={{ maxWidth: "100%" }}
        >
            <div className="">
                <div className="d-flex flex-column align-items-start text-start">
                    <div className="my-1">
                        <span className="fw-normal text-start">
                            {props.paperTitle}
                        </span>
                        <span className="mx-2 badge bg-info text-dark">
                            {props.venue}
                        </span>
                    </div>
                    <div className="my-1 fst-italic fw-light">
                        {getHighlightedText(props.authors, props.nameBold)}
                    </div>
                    <div className="my-1 d-flex flex-row align-content-center">
                        {props.paperLink ? (
                            <a
                                href={props.paperLink}
                                className="me-2 mt-2 py-0 btn btn-outline-dark btn-sm font-monospace"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.paperText}
                            </a>
                        ) : null}
                        {props.codeLink ? (
                            <a
                                href={props.codeLink}
                                className="me-2 mt-2 py-0 btn btn-outline-dark btn-sm font-monospace"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.codeText}
                            </a>
                        ) : null}
                        {props.arxivLink ? (
                            <a
                                href={props.arxivLink}
                                className="me-2 mt-2 py-0 btn btn-outline-dark btn-sm font-monospace"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {props.arxivText}
                            </a>
                        ) : null}
                        {props.cite ? (
                            <div
                                className="me-2 mt-2 py-0 btn btn-outline-dark btn-sm font-monospace"
                                onClick={toggleCitation}
                            >
                                bibtex
                            </div>
                        ) : null}
                    </div>
                    {citation ? (
                        <div
                            className="mt-3 font-monospace"
                            style={{ maxWidth: "100%" }}
                        >
                            <CodeBlock
                                text={props.cite}
                                language={"latex"}
                                showLineNumbers={false}
                                theme={monokai}
                                wrapLines={true}
                                codeBlock
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

Paper.defaultProps = {
    paperTitle: "Paper Title",
    authors: "Paper Authors",
    nameBold: "He Huang",
    venue: "Conference Name",
    paperText: "paper",
    paperLink: "",
    codeText: "code",
    codeLink: "",
    arxivText: "arXiv:2103.15538",
    arxivLink: "",
    cite: "Paper Citation",
};

Paper.propTypes = {
    paperTitle: PropTypes.string,
    authors: PropTypes.string,
    nameBold: PropTypes.string,
    venue: PropTypes.string,
    paperText: PropTypes.string,
    paperLink: PropTypes.string,
    codeText: PropTypes.string,
    codeLink: PropTypes.string,
    arxivText: PropTypes.string,
    arxivLink: PropTypes.string,
    cite: PropTypes.string,
};

export default Paper;
