const Navbar = () => {
    return (
        <nav
            className="sticky top-0 z-50 select-none border-b border-[#2D3A4D]/45 bg-[#202838]/95 shadow-sm backdrop-blur"
            aria-label="Primary"
        >
            <div className="mx-auto w-full max-w-[1320px] px-4">
                <h1 className="m-0 text-[1.32rem] leading-normal font-medium">
                    <a
                        className="inline-block py-3 text-white/92 no-underline transition-colors hover:text-white"
                        href="/"
                    >
                        Mark He Huang
                    </a>
                </h1>
            </div>
        </nav>
    );
};

export default Navbar;
