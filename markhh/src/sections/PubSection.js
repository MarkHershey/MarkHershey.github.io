import React from "react";
import SectionTitle from "../components/SectionTitle";
import Paper from "../components/Paper";
import PUBLICATIONS from "../data/publications";
import { GOOGLE_SCHOLAR_URL } from "../data/socialLinks.mjs";

const PubSection = () => {
    return (
        <div
            className="mx-auto mt-12 w-full max-w-[900px] rounded-xl border border-[#d8e0e8]/55 bg-white p-5 shadow-none sm:p-6"
        >
            <SectionTitle title="Publications" />

            {PUBLICATIONS.map((publication) => (
                <Paper key={publication.id} publication={publication} />
            ))}

            <div className="mt-5 flex justify-end">
                <a
                    href={GOOGLE_SCHOLAR_URL}
                    className="text-[0.95rem] font-medium text-[#2b5b84] no-underline transition-colors hover:text-[#214867] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b5b84]/20"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Full Publication List →
                </a>
            </div>
        </div>
    );
};

export default PubSection;
