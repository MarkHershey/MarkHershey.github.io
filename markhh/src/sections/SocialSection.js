import React from "react";
import SectionTitle from "../components/SectionTitle";
import SocialButton from "../components/SocialButton";
import SOCIAL_LINKS from "../data/socialLinks";

const SocialSection = () => {
    return (
        <div
            className="mt-5 p-4 container jumbotron bg-white shadow-sm user-select-none"
            style={{ maxWidth: 720, borderRadius: 10 }}
        >
            <SectionTitle title="Connect with me" />
            {/* <SocialButton name="Email" link="mailto:me@markhh.com" /> */}
            {SOCIAL_LINKS.map((socialLink) => (
                <SocialButton
                    key={socialLink.name}
                    name={socialLink.name}
                    link={socialLink.link}
                />
            ))}
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
