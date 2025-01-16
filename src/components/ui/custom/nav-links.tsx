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
    /* {
        name: 'Film',
        href: '/home/films',
        icon: "UserGroupIcon"
    },
    {
        name: 'Animation',
        href: '/home/animations',
        icon: "UserGroupIcon"
    },
    {
        name: 'Animation Serie',
        href: '/home/animation_series',
        icon: "UserGroupIcon"
    },
    {
        name: 'Serie',
        href: '/home/series',
        icon: "UserGroupIcon"
    }, */
    {
        name: 'Anime',
        href: '/home/animes',
        icon: "DocumentDuplicateIcon",
    },
    /* {
        name: 'Anime Film',
        href: '/home/anime_films',
        icon: "UserGroupIcon"
    },
    {
        name: 'Game',
        href: '/home/games',
        icon: "UserGroupIcon"
    },
    {
        name: 'Manga',
        href: '/home/mangas',
        icon: "UserGroupIcon"
    }, */
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