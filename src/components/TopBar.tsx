import React from 'react';

export default function TopBar() {
    return (
        <section className="w-full md:w-[1200px] h-[100px] px-4 flex items-center sticky top-0 bg-slate-100">
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-[500px] px-3 py-2 outline-none rounded-md bg-blue-300 placeholder:text-white"
                />
            </form>
        </section>
    );
}
