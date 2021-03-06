import React from 'react'
import SectionTitle from '../components/SectionTitle'
import SocialButton from "../components/SocialButton"

const SocialSection = () => {
    return (
        <div className="mt-5 p-4 container jumbotron bg-white shadow-sm user-select-none" style={{maxWidth: 720, borderRadius: 10}}>
            <SectionTitle title="Connect w/ me" />
            <SocialButton name="Email" link="mailto:mark.h.huang@gmail.com"/>
            <SocialButton name="LinkedIn" link="https://www.linkedin.com/in/huanghe97/"/>
            <SocialButton name="Github" link="https://github.com/MarkHershey"/>
            <SocialButton name="TED Translator" link="https://www.ted.com/profiles/5526668/translator"/>
            <SocialButton name="Google Scholar" link="https://scholar.google.com/citations?user=lv1uAiMAAAAJ&hl=en"/>
            <SocialButton name="ResearchGate" link="https://www.researchgate.net/profile/He-Huang-106"/>
            {/* <SocialButton name="YouTube" link="https://www.youtube.com/channel/UC5ybf7yvOGkoI-XX8SKx-gQ"/> */}
            <SocialButton name="Telegram" link="https://t.me/MarkHershey"/>
            <SocialButton name="Twitter @markkkhh" link="https://twitter.com/markkkhh"/>
            <SocialButton name="Instagram @markkkhh" link="https://www.instagram.com/markkkhh/"/>
            <SocialButton name="ClubHouse @markkkhh" link="https://www.joinclubhouse.com/"/>
            <SocialButton name="Zhihu" link="https://www.zhihu.com/people/huang-he-35-81"/>
            {/* <SocialButton name="Medium" link="https://medium.com/@hhzeos"/> */}
            {/* <SocialButton name="DEV" link="https://dev.to/markhershey"/> */}
            <SocialButton name="Codewars" link="https://www.codewars.com/users/MarkHershey"/>
            {/* <SocialButton name="Kaggle" link="https://www.kaggle.com/markhhuang"/> */}
            {/* <SocialButton name="Bilibili" link="https://space.bilibili.com/7776231"/> */}
            <SocialButton name="ORCID" link="https://orcid.org/0000-0002-9217-4977"/>
            <SocialButton name="Buy me a coffee" link="https://www.buymeacoffee.com/markhuanghe"/>
        </div>
    )
}

export default SocialSection
