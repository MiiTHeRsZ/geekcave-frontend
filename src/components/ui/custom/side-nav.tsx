import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gc_blue-300">
            <Link
                className="mb-2 flex h-8 items-end justify-start rounded-md bg-blue-600 p-2 md:h-16 bg-gc_red-300"
                href="/"
            >
                <div className="w-10 text-white md:w-20 bg-gc_purple-400">
                    Logo
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block bg-gc_blue-800"></div>
            </div>
        </div>
    );
}