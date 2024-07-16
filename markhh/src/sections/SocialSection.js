import React from "react";
import SectionTitle from "../components/SectionTitle";
import SocialButton from "../components/SocialButton";

const SocialSection = () => {
    return (
        <div
            className="mt-5 p-4 container jumbotron bg-white shadow-sm user-select-none"
            style={{ maxWidth: 720, borderRadius: 10 }}
        >
            <SectionTitle title="Connect with me" />
            {/* <SocialButton name="Email" link="mailto:me@markhh.com" /> */}
            <SocialButton
                name="Google Scholar"
                link="https://scholar.google.com/citations?user=lv1uAiMAAAAJ"
            />
            <SocialButton
                name="ORCID"
                link="https://orcid.org/0000-0002-9217-4977"
            />
            <SocialButton
                name="OpenReview"
                link="https://openreview.net/profile?id=~Mark_He_Huang1"
            />
            <SocialButton
                name="arXiv.org"
                link="https://arxiv.org/a/huang_h_7.html"
            />
            <SocialButton
                name="ResearchGate"
                link="https://www.researchgate.net/profile/He-Huang-106"
            />
            <SocialButton
                name="DBLP"
                link="https://dblp.org/pid/344/4694.html"
            />
            <SocialButton
                name="LinkedIn"
                link="https://www.linkedin.com/in/markhehuang/"
            />
            <SocialButton name="GitHub" link="https://github.com/MarkHershey" />
            <SocialButton
                name="Instagram"
                link="https://www.instagram.com/markkkhh/"
            />
            <SocialButton name="X.com" link="https://x.com/markkkhh" />
            {/* <SocialButton
                name="Documentations"
                link="https://docs.markhh.com/"
            /> */}
            {/* <SocialButton
                name="markhh.eth"
                link="https://etherscan.io/nft/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/49920497124414335801501743205458392000460825151307679126825723490949631056208"
            /> */}
            {/* <SocialButton
                name="Buy me a coffee"
                link="https://www.buymeacoffee.com/markhuanghe"
            /> */}
        </div>
    );
};

export default SocialSection;
