import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../utils/book-data";

const BookDetails = () => {
    const [book, setBook] = useState({});

    const { bookId } = useParams();

    useEffect(() => {
        if (bookId) {
            const b = books.find((b) => b.id.toString() === bookId);
            setBook(b);
        }
    }, [bookId]);

    return (
        <>
            <div className="w-full grid grid-cols-9 gap-4 px-4 md:px-8 lg:px-16 xl:px-24 pb-8">
                <div className="left col-span-3 relative rounded-2xl overflow-hidden">
                    <img
                        className="w-full object-cover object-center"
                        src={book.cover}
                        alt="book-cover"
                    />
                    <span className="px-4 py-2 bg-gray-950/90 absolute right-2 top-2 left-2 w-fit rounded-full text-sm">
                        ⭐ {book.rating}
                    </span>
                </div>
                <div className="right flex flex-col gap-4 items-start col-span-6 p-4 border rounded-2xl bg-gray-900/90">
                    <p className="px-4 py-2 text-zinc-900 rounded-md bg-gray-200">
                        {book.category}
                    </p>
                    <h2 className="text-3xl font-semibold">{book.title}</h2>
                    <p className="text-lg">{book.description}</p>
                    <p className="font-semibold">By - {book.author}</p>
                </div>
            </div>
        </>
    );
};

export default BookDetails;
