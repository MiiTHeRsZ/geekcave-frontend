'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: 'Home',
        href: '/home',
        icon: "HomeIcon"
    },
    {
        name: 'Anime',
        href: '/home/anime',
        icon: "DocumentDuplicateIcon",
    },
    {
        name: 'Game',
        href: '/home/Game',
        icon: "UserGroupIcon"
    },
];

export default function NavLinks() {
    const pathname = usePathname()
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-lg font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-gc_grey-500 text-gc_purple-500': pathname === link.href,
                            },
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}