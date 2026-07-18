import React from "react";
import ProfileImg from "../pics/markhh.jpg";
import SOCIAL_LINKS from "../data/socialLinks";

const BioSection = () => {
    return (
        <div
            className="mx-auto mt-12 w-full max-w-[720px] rounded-xl border border-[#d8e0e8]/55 bg-white p-5 shadow-none select-none sm:p-6"
        >
            <div className="my-1 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-5 sm:text-left">
                <img
                    src={ProfileImg}
                    className="h-36 w-36 shrink-0 rounded-xl object-cover sm:h-44 sm:w-44 md:h-[200px] md:w-[200px]"
                    alt="Portrait of Mark He Huang"
                />

                <div className="w-full flex-1" id="BioText">
                    <p className="mb-0">
                        Hi there, I'm <b>Mark He Huang</b>, currently based in Singapore. I work on 3D/4D perception,
                        learning, and reasoning in physical spaces. I'm a PhD student in Computer Science at{" "}
                        <a
                            href="https://www.sutd.edu.sg"
                            className="text-[#2b5b84] underline decoration-[#9eb3c8] underline-offset-2 hover:text-[#214867]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Singapore University of Technology and Design
                        </a> {" "}
                        and my PhD research is generously supported by{" "}
                        <a
                            href="https://www.a-star.edu.sg"
                            className="text-[#2b5b84] underline decoration-[#9eb3c8] underline-offset-2 hover:text-[#214867]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            A*STAR
                        </a>
                        {" "}
                        Computing and Information Science (ACIS/AGS Computing) Scholarship.
                    </p>
                    <div className="mt-6 text-sm leading-6 not-italic text-[#526070]">
                        {SOCIAL_LINKS.map((socialLink, index) => (
                            <React.Fragment key={socialLink.name}>
                                {index > 0 ? (
                                    <span className="text-[#a7b0ba]" aria-hidden="true"> / </span>
                                ) : null}
                                <a
                                    href={socialLink.link}
                                    className="text-inherit mx-2 no-underline transition-colors hover:text-[#0f4775] hover:underline hover:decoration-2 hover:underline-offset-2 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b5b84]/20"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {socialLink.name.toLowerCase()}
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioSection;
