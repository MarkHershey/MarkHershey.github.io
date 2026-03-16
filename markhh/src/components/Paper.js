import React, { useState } from "react";
import PropTypes from "prop-types";

const ACTION_CLASS_NAME =
    "inline-flex h-8 items-center rounded-md border border-[#212529]/80 px-2.5 text-[0.84rem] leading-none text-[#212529] no-underline [font-family:'Source_Code_Pro',monospace] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#111827] hover:bg-[#212529] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1E2C]/30";

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
            className="my-3 rounded-xl border border-[#e2e5ee] bg-[#f8f9fa] p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow"
            style={{ maxWidth: "100%" }}
        >
            <div>
                <div className="flex flex-col items-start text-left">
                    <div className="my-1 grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-2">
                        <span className="min-w-0 text-left text-[1.03rem] font-normal text-[#1f2937]">{paperTitle}</span>
                        <span className="inline-flex justify-self-end whitespace-nowrap rounded-md bg-[#0dcaf0] px-[0.65em] py-[0.35em] text-right text-[0.72rem] font-bold tracking-wide text-[#212529]">{venue}</span>
                    </div>
                    <div className="my-1 text-[1.03rem] italic font-light text-[#4b5563]">
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
                                    backgroundColor: 'rgb(40, 44, 52)',
                                    color: 'rgb(191, 191, 191)',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.85rem',
                                    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                                    overflow: 'hidden',
                                    // whiteSpace: 'pre-wrap',
                                    wordWrap: 'break-word',
                                    border: '1px solid #3e4451',
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
