import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { books } from "../utils/book-data";
import BookCard from "../components/BookCard";
import SearchForm from "../components/SearchForm";

const Search = () => {
    const [booksArray, setBooksArray] = useState([]);

    const { search } = useParams();

    useEffect(() => {
        if (search) {
            setBooksArray(
                books.filter(
                    (b) =>
                        b.title
                            .toLowerCase()
                            .includes(search.trim().toLocaleLowerCase()) ||
                        b.author
                            .toLowerCase()
                            .includes(search.trim().toLocaleLowerCase())
                )
            );
        }
    }, [search]);

    return (
        <main className="w-dvw h-dvh text-white overflow-y-auto relative">
            <Link className="flex fixed top-4 left-4 z-50" to={"/"}>
                <span className="px-4 py-2 bg-gray-200 text-zinc-900 rounded-md flex items-center gap-2">
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                    </svg>{" "}
                    Back To Home
                </span>
            </Link>
            <div className="w-full flex flex-col items-center gap-8 overflow-clip pt-20 md:pt-4">
                <div className="w-full flex items-center justify-center sticky top-4 left-0 z-40">
                    <SearchForm />
                </div>

                <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 xl:px-24 pb-8">
                    {booksArray.map((b) => {
                        return <BookCard key={b.id} info={b} />;
                    })}
                </div>
            </div>
        </main>
    );
};

export default Search;
