"use client";

import { Component } from "react";
import Image from "next/image";

import MenuIcon from '@mui/icons-material/Menu';
import Logo from "@/public/logo.png";

export default class Header extends Component {
    render() {
        return (
            <header className="bg-cyan-700">
                <div className="max-w-screen-lg mx-auto flex justify-center md:justify-between md:px-12">
                    <div className="flex justify-center my-4">
                        <Image src={Logo} alt="Logo" height={50} />
                        <h1 className="mx-4 my-auto text-2xl font-semibold">
                            Lucas Guerra
                        </h1>
                    </div>
                    <div className="my-auto">
                        <button className="flex justify-center hover:bg-cyan-800 p-2 rounded-md">
                            <MenuIcon />
                            <span className="hidden px-2 md:block">Menu</span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}