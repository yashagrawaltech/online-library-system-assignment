import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { books } from "../utils/book-data";
import BookCard from "../components/BookCard";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";

const Search = () => {
    const [booksArray, setBooksArray] = useState([]);

    const { search } = useParams();

    useEffect(() => {
        if (search) {
            setBooksArray(
                books.filter((b) =>
                    b.title
                        .toLowerCase()
                        .includes(search.trim().toLocaleLowerCase())
                )
            );
        }
    }, [search]);

    return (
        <main className="w-dvw h-dvh text-white overflow-y-auto relative">
            <Navbar />
            <div className="w-full flex flex-col items-center gap-8 overflow-clip">
                <div className="w-full flex items-center justify-center sticky top-18 sm:top-16 left-0 z-40">
                    <SearchForm />
                </div>

                <>
                    <div className="flex w-full px-4 md:px-8 lg:px-16 xl:px-24 items-center justify-center gap-4 opacity-70">
                        <hr className="w-[20%] md:w-[10%] fill-gray-200 border-2 rounded-md" />
                        <h2 className="sm:text-nowrap text-center text-xl md:text-3xl">
                            Search Results for "{search}"
                        </h2>
                        <hr className="w-[20%] md:w-[10%] fill-gray-200 border-2 rounded-md" />
                    </div>
                    <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 xl:px-24 pb-8 -mt-2">
                        {booksArray.map((b) => {
                            return <BookCard key={b.id} info={b} />;
                        })}
                    </div>
                </>
            </div>
        </main>
    );
};

export default Search;
