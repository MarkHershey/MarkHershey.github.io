import React from "react";
import ProfileImg from "../pics/markhh.jpg";

const BioSection = () => {
    return (
        <div
            className="mt-5 p-3 container jumbotron bg-white shadow-sm user-select-none"
            style={{ maxWidth: 720, borderRadius: 10 }}
        >
            <div className="my-2 row text-center align-center align-items-center justify-content-center">
                <img
                    src={ProfileImg}
                    className="my-3 col-4"
                    alt="ProfileImg"
                    style={{
                        maxWidth: 200,
                        maxHeight: 200,
                        width: "100%",
                        borderRadius: 10,
                    }}
                />

                <div className="mt-2 col-8" id="BioText">
                    <p className="card-text">
                        Hi there, I'm <b>Mark He Huang</b>, based in Singapore, currently a Computer Science PhD
                        student working on 3D/4D Computer Vision, Multi-Modal Reasoning at{" "}
                        <a
                            href="https://www.sutd.edu.sg"
                            className="text-info"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            SUTD
                        </a> &{" "}
                        <a
                            href="https://www.a-star.edu.sg/cfar"
                            className="text-info"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
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
