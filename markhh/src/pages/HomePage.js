import React from "react";
import BioSection from "../sections/BioSection";
import PubSection from "../sections/PubSection";
// import ProjectSection from '../sections/ProjectSection'

const HomePage = () => {
    return (
        <div>
            <BioSection />
            <PubSection />
            {/* <ProjectSection /> */}
        </div>
    );
};

export default HomePage;
