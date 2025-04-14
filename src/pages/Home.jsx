import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";

const Home = () => {
    const [booksArray, setBooksArray] = useState([]);
    const books = useSelector((state) => state.books);

    useEffect(() => {
        if (Array.isArray(books) && books.length) {
            const popularBooks = [...books]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 10);
            setBooksArray(popularBooks);
        }
    }, [books]);

    return (
        <>
            <div className="flex w-full px-4 md:px-8 lg:px-16 xl:px-24 items-center justify-center gap-4 opacity-70">
                <hr className="w-[20%] md:w-[10%] fill-gray-200 border-2 rounded-md" />
                <h2 className="sm:text-nowrap text-center text-xl md:text-3xl capitalize">
                    Popular Books
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

export default Home;
