import Link from 'next/link';
import React from 'react';

export default function NavbarPc() {
    return (
        <nav className="hidden md:block md:w-[300px] fixed h-full p-4 z-10 bg-blue-600 text-white">
            <h1 className="text-3xl font-semibold capitalize underline underline-offset-8">
                contents
            </h1>
            <ul className="py-4 space-y-4">
                <li className="text-xl cursor-pointer duration-200 hover:opacity-80 hover:pl-3 hover:capitalize hover:underline underline-offset-4">
                    <Link href={'/continents'}>
                        <span>continents</span>
                    </Link>
                </li>

                <li className="text-xl cursor-pointer duration-200 hover:opacity-80 hover:pl-3 hover:capitalize hover:underline underline-offset-4">
                    <Link href={'/countries'}>
                        <span>countries</span>
                    </Link>
                </li>
                <li className="text-xl cursor-pointer duration-200 hover:opacity-80 hover:pl-3 hover:capitalize hover:underline underline-offset-4">
                    <Link href={'/planets'}>
                        <span>planets</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
