import React, { useState } from "react";
import PropTypes from "prop-types";

const ACTION_CLASS_NAME =
    "inline-flex h-8 items-center rounded-md border border-[#9eacbc] px-2.5 font-mono text-[0.84rem] leading-none text-[#45586c] no-underline transition-colors duration-150 hover:border-[#7f91a5] hover:bg-[#edf2f7] hover:text-[#1f2a37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b5b84]/20";

const AUTHOR_LINK_CLASS_NAME =
    "text-inherit no-underline transition-colors hover:text-[#0f4775] hover:underline hover:decoration-2 hover:underline-offset-2 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b5b84]/20";

const Paper = ({ publication }) => {
    const { id, thumbnail, title, authors, venue, links, citation } = publication;
    const primaryLink = Object.values(links).find(Boolean);
    const ThumbnailWrapper = primaryLink ? "a" : "div";
    const [isCitationVisible, setIsCitationVisible] = useState(false);
    const [copyStatus, setCopyStatus] = useState("copy bibtex");
    const citationId = `citation-${id}`;

    const toggleCitation = () => {
        setIsCitationVisible((currentValue) => !currentValue);
        setCopyStatus("copy bibtex");
    };

    const copyCitation = async () => {
        try {
            if (!navigator.clipboard?.writeText) {
                throw new Error("Clipboard API unavailable");
            }

            await navigator.clipboard.writeText(citation);
            setCopyStatus("copied");
        } catch {
            setCopyStatus("copy unavailable");
        }
    };

    return (
        <article
            className="my-3 rounded-xl border border-[#d8e0e8]/55 bg-white p-4 shadow-none transition-colors duration-200"
            style={{ maxWidth: "100%" }}
        >
            <div className="grid gap-4 sm:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] sm:gap-5">
                {thumbnail?.src ? (
                    <ThumbnailWrapper
                        {...(primaryLink ? {
                            href: primaryLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                        } : {})}
                        aria-label={primaryLink ? `Open ${title}` : undefined}
                        className="group flex aspect-[3/2] min-w-0 items-center justify-center overflow-hidden bg-white"
                    >
                        <img
                            src={thumbnail.src}
                            alt={thumbnail.alt}
                            className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                            loading="lazy"
                        />
                    </ThumbnailWrapper>
                ) : null}

                <div className="flex min-w-0 flex-col items-start text-left">
                    <div className="my-1 grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-2">
                        <span className="min-w-0 text-left text-[1.03rem] font-normal text-[#1f2a37]">{title}</span>
                        <span className="inline-flex justify-self-end whitespace-nowrap rounded-md bg-[#dce8f3] px-[0.65em] py-[0.35em] text-right text-[0.72rem] font-bold tracking-wide text-[#2b4f73]">{venue}</span>
                    </div>
                    <div className="my-1 text-[1.03rem] italic font-light text-[#526070]">
                        {authors.map((author, index) => (
                            <React.Fragment key={`${author.name}-${index}`}>
                                {index > 0 ? ", " : null}
                                {author.url ? (
                                    <a
                                        href={author.url}
                                        className={`${AUTHOR_LINK_CLASS_NAME} ${author.highlighted ? "font-bold" : ""}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {author.name}
                                    </a>
                                ) : (
                                    <span className={author.highlighted ? "font-bold" : ""}>
                                        {author.name}
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="my-1 flex flex-wrap content-start gap-2">
                        {Object.entries(links).map(([label, url]) => url ? (
                            <a
                                key={label}
                                href={url}
                                className={ACTION_CLASS_NAME}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {label}
                            </a>
                        ) : null)}
                        {citation ? (
                            <button
                                type="button"
                                className={`${ACTION_CLASS_NAME} cursor-pointer`}
                                onClick={toggleCitation}
                                aria-expanded={isCitationVisible}
                                aria-controls={citationId}
                            >
                                {isCitationVisible ? "hide bibtex" : "bibtex"}
                            </button>
                        ) : null}
                    </div>
                    {isCitationVisible ? (
                        <div
                            id={citationId}
                            className="mt-4 w-full min-w-0 font-mono"
                            role="region"
                            aria-label={`${title} BibTeX citation`}
                        >
                            <div className="mb-2 flex justify-end">
                                <button
                                    type="button"
                                    className={`${ACTION_CLASS_NAME} cursor-pointer`}
                                    onClick={copyCitation}
                                    aria-live="polite"
                                >
                                    {copyStatus}
                                </button>
                            </div>
                            <pre
                                className="whitespace-pre-wrap break-words"
                                style={{
                                    backgroundColor: '#26303d',
                                    color: '#d4dbe3',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.85rem',
                                    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                                    overflow: 'hidden',
                                    wordWrap: 'break-word',
                                    border: '1px solid #3f4a59',
                                    margin: 0
                                }}
                            >
                                {citation}
                            </pre>
                        </div>
                    ) : null}
                </div>
            </div>
        </article>
    );
};

Paper.propTypes = {
    publication: PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumbnail: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string,
            highlighted: PropTypes.bool,
        })).isRequired,
        venue: PropTypes.string.isRequired,
        links: PropTypes.objectOf(PropTypes.string).isRequired,
        citation: PropTypes.string,
    }).isRequired,
};

export default Paper;
