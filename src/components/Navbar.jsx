"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HiOutlineMenuAlt1 } from "react-icons/hi";


const Navbar = () => {

    const pathName = usePathname();

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Post",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "Gallery",
            path: "/gallery"
        },
    ]

    return (
        <div>
            <div className="navbar md:w-5/6 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <HiOutlineMenuAlt1 className='text-2xl' />
                        </div>
                        <ul className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-2">
                            {
                                navItems.map(item => <Link href={item.path} key={item.path} className='flex flex-col'>
                                    <li className={item.path === pathName ? 'btn btn-sm bg-black text-white' : 'btn btn-sm'}>{item.title}</li>
                                </Link>)
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Learn Next</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-3">
                        {
                            navItems.map(item => <Link href={item.path} key={item.path}>
                                <li className={item.path === pathName ? 'btn btn-sm bg-black text-white' : 'btn btn-sm'}>{item.title}</li>
                            </Link>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-black text-white px-10">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;