'use client';
import React, { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

export default function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full h-16 px-4 flex items-center justify-between border-b bg-blue-600 md:hidden">
            <div className="text-2xl font-semibold border px-2 py-1 rounded-lg uppercase border-blue-300 text-blue-100">
                kart
            </div>
            {menuOpen ? (
                <RxCross2
                    className="text-3xl text-white"
                    onClick={() => setMenuOpen((pv) => !pv)}
                />
            ) : (
                <RiMenu3Line
                    className="text-3xl text-white"
                    onClick={() => setMenuOpen((pv) => !pv)}
                />
            )}
        </nav>
    );
}
