import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full py-4 px-4 flex items-center justify-center gap-2 sm:gap-8 text-center sticky top-0 bg-gray-950/90 z-50">
            <Link
                to={"/"}
                className="flex hover:underline hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
                Home
            </Link>
            <Link
                to={"/browse-books"}
                className="flex hover:underline hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
                Browse Books
            </Link>
            <Link
                to={"/add-book"}
                className="flex hover:underline hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
                Add Book
            </Link>
        </nav>
    );
};

export default Navbar;
