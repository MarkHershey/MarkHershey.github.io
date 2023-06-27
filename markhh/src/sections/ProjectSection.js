import React from "react";
import SectionTitle from "../components/SectionTitle";

const ProjectSection = () => {
    return (
        <div
            className="mt-5 p-4 container bg-white shadow-sm"
            style={{ maxWidth: 720, borderRadius: 10 }}
        >
            <SectionTitle title="Projects" />
        </div>
    );
};

export default ProjectSection;
