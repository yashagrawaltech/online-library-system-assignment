import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";

const FilteredBook = () => {
    const [booksArray, setBooksArray] = useState([]);
    const books = useSelector((state) => state.books);

    const { category } = useParams();

    useEffect(() => {
        if (category) {
            setBooksArray(
                books.filter(
                    (b) => b.category.toLowerCase() === category.toLowerCase()
                )
            );
        }
    }, [category, books]);

    if (!booksArray.length) {
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
                        <path
                            className="st0"
                            d="M45.54,2.11c32.77-8.78,66.45,10.67,75.23,43.43c8.78,32.77-10.67,66.45-43.43,75.23 c-32.77,8.78-66.45-10.67-75.23-43.43C-6.67,44.57,12.77,10.89,45.54,2.11L45.54,2.11z"
                        />
                        <path
                            className="st1"
                            d="M45.78,32.27c4.3,0,7.78,5.05,7.78,11.27c0,6.22-3.48,11.27-7.78,11.27c-4.3,0-7.78-5.05-7.78-11.27 C38,37.32,41.48,32.27,45.78,32.27L45.78,32.27z M28.12,94.7c16.69-21.63,51.01-21.16,65.78,0.04l2.41-2.39 c-16.54-28.07-51.56-29.07-70.7-0.15L28.12,94.7L28.12,94.7z M77.1,32.27c4.3,0,7.78,5.05,7.78,11.27c0,6.22-3.48,11.27-7.78,11.27 c-4.3,0-7.78-5.05-7.78-11.27C69.31,37.32,72.8,32.27,77.1,32.27L77.1,32.27z"
                        />
                    </g>
                </svg>
                <h1 className="text-2xl font-bold">No Book Found</h1>
                <p className="mt-4">
                    The book you are looking for does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 xl:px-24 pb-8">
            {booksArray.map((b) => {
                return <BookCard key={b.id} info={b} />;
            })}
        </div>
    );
};

export default FilteredBook;
