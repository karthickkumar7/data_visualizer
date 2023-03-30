import NavbarMobile from '@/components/NavbarMobile';
import NavbarPc from '@/components/NavbarPc';
import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';

export default async function page() {
    return (
        <div className="bg-gray-100 h-screen w-screen">
            {/* PC */}
            <NavbarPc />

            {/* MOBILE */}
            <NavbarMobile />
        </div>
    );
}
