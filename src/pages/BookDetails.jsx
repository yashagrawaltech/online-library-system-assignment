import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const { bookId } = useParams();
    const books = useSelector((state) => state.books);

    useEffect(() => {
        if (bookId) {
            const foundBook = books.find((b) => b.id.toString() === bookId);
            if (foundBook) {
                setBook(foundBook);
                setError(null);
            } else {
                setError("No book found.");
            }
        }
    }, [bookId, books]);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center mt-8">
                <svg
                    className="w-24 h-24 mb-4 animate-bounce"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 122.88 122.88"
                    style={{ enableBackground: "new 0 0 122.88 122.88" }}
                    xmlSpace="preserve"
                >
                    <style type="text/css">
                        {`
                            .st0 { fill-rule:evenodd; clip-rule:evenodd; fill:#FBD433; }
                            .st1 { fill-rule:evenodd; clip-rule:evenodd; fill:#141518; }
                        `}
                    </style>
                    <g>
                        <path className="st0" d="M45.54,2.11c32.77-8.78,66.45,10.67,75.23,43.43c8.78,32.77-10.67,66.45-43.43,75.23 c-32.77,8.78-66.45-10.67-75.23-43.43C-6.67,44.57,12.77,10.89,45.54,2.11L45.54,2.11z"/>
                        <path className="st1" d="M45.78,32.27c4.3,0,7.78,5.05,7.78,11.27c0,6.22-3.48,11.27-7.78,11.27c-4.3,0-7.78-5.05-7.78-11.27 C38,37.32,41.48,32.27,45.78,32.27L45.78,32.27z M28.12,94.7c16.69-21.63,51.01-21.16,65.78,0.04l2.41-2.39 c-16.54-28.07-51.56-29.07-70.7-0.15L28.12,94.7L28.12,94.7z M77.1,32.27c4.3,0,7.78,5.05,7.78,11.27c0,6.22-3.48,11.27-7.78,11.27 c-4.3,0-7.78-5.05-7.78-11.27C69.31,37.32,72.8,32.27,77.1,32.27L77.1,32.27z"/>
                    </g>
                </svg>
                <h1 className="text-2xl font-bold">No Book Found</h1>
                <p className="mt-4">The book you are looking for does not exist.</p>
            </div>
        );
    }

    if (!book) {
        return null;
    }

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-9 gap-4 px-4 sm:px-8 lg:px-16 xl:px-24 pb-8">
            <div className="left col-span-1 sm:col-span-3 relative rounded-2xl overflow-hidden">
                <img
                    className="w-full object-cover object-center"
                    src={book.cover}
                    alt="book-cover"
                />
                <span className="px-4 py-2 bg-gray-950/90 absolute right-2 top-2 left-2 w-fit rounded-full text-sm">
                    ⭐ {book.rating}
                </span>
            </div>
            <div className="right flex flex-col gap-4 items-start col-span-1 sm:col-span-6 p-4 border rounded-2xl bg-gray-900/90">
                <p className="px-4 py-2 text-zinc-900 rounded-md bg-gray-200">
                    {book.category}
                </p>
                <h2 className="text-3xl font-semibold">{book.title}</h2>
                <p className="text-lg">{book.description}</p>
                <p className="font-semibold">By - {book.author}</p>
            </div>
        </div>
    );
};

export default BookDetails;
