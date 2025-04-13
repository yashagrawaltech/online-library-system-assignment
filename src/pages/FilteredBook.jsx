import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../utils/book-data";
import BookCard from "../components/BookCard";

const FilteredBook = () => {
    const [booksArray, setBooksArray] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        if (category) {
            setBooksArray(
                books.filter(
                    (b) => b.category.toLowerCase() === category.toLowerCase()
                )
            );
        }
    }, [category]);

    return (
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 xl:px-24 pb-8">
            {booksArray.map((b) => {
                return <BookCard key={b.id} info={b} />;
            })}
        </div>
    );
};

export default FilteredBook;
