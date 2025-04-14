import { useEffect, useState } from "react";
import { books } from "../utils/book-data";
import BookCard from "../components/BookCard";

const BrowseBooks = () => {
    const [booksArray, setBooksArray] = useState([]);

    useEffect(() => {
        if (books.length) {
            setBooksArray(books);
        }
    }, []);

    return (
        <>
            <div className="flex w-full px-4 md:px-8 lg:px-16 xl:px-24 items-center justify-center gap-4 opacity-70">
                <hr className="w-[20%] md:w-[10%] fill-gray-200 border-2 rounded-md" />
                <h2 className="sm:text-nowrap text-center text-xl md:text-3xl capitalize">
                    All Books
                </h2>
                <hr className="w-[20%] md:w-[10%] fill-gray-200 border-2 rounded-md" />
            </div>
            <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 xl:px-24 pb-8 -mt-2">
                {booksArray.map((b) => {
                    return <BookCard key={b.id} info={b} />;
                })}
            </div>
        </>
    );
};

export default BrowseBooks;
