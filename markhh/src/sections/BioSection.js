import React from "react";
import ProfileImg from "../pics/markhh.jpg";

const BioSection = () => {
    return (
        <div
            className="mx-auto mt-12 w-full max-w-[720px] rounded-xl border border-[#e2e5ee] bg-white p-5 shadow-sm select-none sm:p-6"
        >
            <div className="my-1 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-5 sm:text-left">
                <img
                    src={ProfileImg}
                    className="h-36 w-36 shrink-0 rounded-xl object-cover sm:h-44 sm:w-44 md:h-[200px] md:w-[200px]"
                    alt="ProfileImg"
                />

                <div className="w-full flex-1" id="BioText">
                    <p className="mb-0">
                        Hi there, I'm <b>Mark He Huang</b>, based in Singapore, currently a Computer Science PhD
                        student working on 3D/4D Computer Vision, Multi-Modal Reasoning at{" "}
                        <a
                            href="https://www.sutd.edu.sg"
                            className="text-[#0dcaf0] no-underline hover:text-[#31d2f2]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SUTD
                        </a> &{" "}
                        <a
                            href="https://www.a-star.edu.sg/cfar"
                            className="text-[#0dcaf0] no-underline hover:text-[#31d2f2]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            A*STAR
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BioSection;
