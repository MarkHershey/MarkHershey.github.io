import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-12 pb-8 pt-2 select-none">
            <div className="w-full px-6 sm:px-12">
                <hr className="border-t border-[#d8e0e8]" />
                <p className="mt-3 text-center text-[0.64rem] uppercase tracking-[0.14em] text-[#526070] [font-family:'Source_Code_Pro',monospace] sm:text-[0.7rem]">
                    MARK H. HUANG © {currentYear}. ALL RIGHTS RESERVED. LAST
                    UPDATED: JUL 2026.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
