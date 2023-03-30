import React from 'react';

export default function NavbarPc() {
    return (
        <nav className="hidden md:block md:w-[300px] h-full p-4 bg-blue-600 text-white">
            <h2 className="text-3xl font-semibold capitalize underline underline-offset-8">
                contents
            </h2>
            <ul className="py-4 space-y-4">
                <li className="text-xl cursor-pointer duration-200 hover:opacity-80 hover:pl-3 hover:capitalize hover:underline underline-offset-4">
                    continents
                </li>
                <li className="text-xl cursor-pointer duration-200 hover:opacity-80 hover:pl-3 hover:capitalize hover:underline underline-offset-4">
                    countries
                </li>
                <li className="text-xl cursor-pointer duration-200 hover:opacity-80 hover:pl-3 hover:capitalize hover:underline underline-offset-4">
                    planets
                </li>
            </ul>
        </nav>
    );
}
