import Link from "next/link";

const NAV_ITEMS = [
    { label: "Plants", href: "/products?category=plants" },
    { label: "Seeds", href: "/products?category=seeds" },
    { label: "Pots & Planters", href: "/products?category=pots-planters" },
    { label: "Plant Care", href: "/products?category=plant-care" },
];

const Navbar = () => (
    <nav className="w-full shadow bg-white">
        {/* Top Row */}
        <div className="flex items-center px-8 py-3 gap-4">
            <Link href="/" passHref>
                <span className="font-bold text-xl tracking-wider text-black cursor-pointer">Logo</span>
            </Link>
            <input
                type="text"
                placeholder="Search products…"
                className="flex-1 border border-slate-300 rounded-md px-4 py-2 outline-none text-base text-black bg-white"
                aria-label="Search products"
            />
            <Link href="/user" passHref className="ml-4 p-2 rounded-full hover:bg-blue-50 active:bg-blue-100 transition" title="Account">
                {/* Account Icon */}
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="9" r="4" />
                    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                </svg>
            </Link>
            <Link href="/cart" passHref className="ml-2 p-2 rounded-full hover:bg-blue-50 active:bg-blue-100 transition cursor-pointer" title="Cart">
                {/* Cart Icon */}
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="9" cy="20" r="1.5" />
                    <circle cx="17" cy="20" r="1.5" />
                    <path d="M5.5 7h13l-1.38 8.32A2 2 0 0 1 15.15 17H8.85a2 2 0 0 1-1.97-1.68L5.5 7z" />
                    <path d="M7.5 3h9" />
                </svg>
            </Link>
        </div>
        {/* Second Row */}
        <div className="flex justify-center gap-10 border-t border-slate-200 py-3 text-base text-black">
            {NAV_ITEMS.map(({ label, href }) => (
                <Link
                    key={label}
                    href={href}
                    className="cursor-pointer hover:text-blue-700 transition"
                >
                    {label}
                </Link>
            ))}
            <Link
                href="/auth"
                className="cursor-pointer hover:text-blue-700 transition font-medium"
            >
                Login / Sign Up
            </Link>
        </div>
    </nav>
);

export default Navbar;
