const Navbar = () => {
    return (
        <nav
            className="sticky top-0 z-50 select-none border-b border-white/15 bg-black/75 shadow-[0_1px_3px_rgba(0,0,0,0.16)] backdrop-blur-md"
            aria-label="Primary"
        >
            <div className="mx-auto w-full max-w-[900px] px-5 sm:px-6">
                <h1 className="m-0 text-[1.18rem] leading-normal font-medium tracking-[0.01em]">
                    <a
                        className="inline-block py-3 text-white/90 no-underline transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
