import React, { useState } from "react";
import PropTypes from "prop-types";

const ACTION_CLASS_NAME =
    "inline-flex h-8 items-center rounded-md border border-[#9eacbc] px-2.5 text-[0.84rem] leading-none text-[#45586c] no-underline [font-family:'Source_Code_Pro',monospace] transition-colors duration-150 hover:border-[#7f91a5] hover:bg-[#edf2f7] hover:text-[#1f2a37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b5b84]/20";

const Paper = ({
    paperTitle,
    authors,
    nameBold,
    venue,
    paperText,
    paperLink,
    codeText,
    codeLink,
    arxivText,
    arxivLink,
    cite,
}) => {
    const copyToClipboard = (text) => {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(text);
        }
    };

    const [citation, setCitation] = useState(false);

    const toggleCitation = () => {
        copyToClipboard(cite);
        setCitation((currentValue) => !currentValue);
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
            className="my-3 rounded-xl border border-[#d8e0e8]/55 bg-[#f9fbfd] p-4 shadow-none transition-colors duration-200"
            style={{ maxWidth: "100%" }}
        >
            <div>
                <div className="flex flex-col items-start text-left">
                    <div className="my-1 grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-2">
                        <span className="min-w-0 text-left text-[1.03rem] font-normal text-[#1f2a37]">{paperTitle}</span>
                        <span className="inline-flex justify-self-end whitespace-nowrap rounded-md bg-[#dce8f3] px-[0.65em] py-[0.35em] text-right text-[0.72rem] font-bold tracking-wide text-[#2b4f73]">{venue}</span>
                    </div>
                    <div className="my-1 text-[1.03rem] italic font-light text-[#526070]">
                        {getHighlightedText(authors, nameBold)}
                    </div>
                    <div className="my-1 flex flex-wrap content-start gap-2">
                        {paperLink ? (
                            <a
                                href={paperLink}
                                className={ACTION_CLASS_NAME}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {paperText}
                            </a>
                        ) : null}
                        {codeLink ? (
                            <a
                                href={codeLink}
                                className={ACTION_CLASS_NAME}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {codeText}
                            </a>
                        ) : null}
                        {arxivLink ? (
                            <a
                                href={arxivLink}
                                className={ACTION_CLASS_NAME}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {arxivText}
                            </a>
                        ) : null}
                        {cite ? (
                            <button
                                type="button"
                                className={`${ACTION_CLASS_NAME} cursor-pointer`}
                                onClick={toggleCitation}
                            >
                                bibtex
                            </button>
                        ) : null}
                    </div>
                    {citation ? (
                        <div
                            className="mt-4 w-full [font-family:'Source_Code_Pro',monospace]"
                            style={{ maxWidth: "100%" }}
                        >
                            <pre
                                style={{
                                    backgroundColor: '#26303d',
                                    color: '#d4dbe3',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.85rem',
                                    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                                    overflow: 'hidden',
                                    // whiteSpace: 'pre-wrap',
                                    wordWrap: 'break-word',
                                    border: '1px solid #3f4a59',
                                    margin: 0
                                }}
                            >
                                {cite}
                            </pre>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

Paper.defaultProps = {
    paperTitle: "Paper Title",
    authors: "Author A, Author B, and Other",
    nameBold: "Author A",
    venue: "Conference Name",
    paperText: "paper",
    paperLink: "",
    codeText: "code",
    codeLink: "",
    arxivText: "arXiv:xxxx.xxxxx",
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
