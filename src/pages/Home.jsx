import BookCard from "../components/BookCard";
import { books } from "../utils/book-data.js";

const Home = () => {
    return (
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 xl:px-24 pb-8">
            {books.map((b) => {
                return <BookCard key={b.id} info={b} />;
            })}
        </div>
    );
};

export default Home;
