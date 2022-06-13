import React from "react";
import BioSection from "../sections/BioSection";
import PubSection from "../sections/PubSection";
// import ProjectSection from '../sections/ProjectSection'
import SocialSection from "../sections/SocialSection";

const HomePage = () => {
    return (
        <div>
            <BioSection />
            <PubSection />
            {/* <ProjectSection /> */}
            <SocialSection />
        </div>
    );
};

export default HomePage;
