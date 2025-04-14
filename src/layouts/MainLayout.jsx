import { Link, Outlet, useParams } from "react-router-dom";
import { categories } from "../utils/book-data";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    const { category } = useParams();

    return (
        <main className="w-dvw h-dvh text-white overflow-y-auto">
            <Navbar />
            <div className="w-full flex flex-col items-center gap-8 overflow-clip pt-4">
                <div className="w-full text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 pt-4">
                    <h1 className="text-2xl md:text-4xl font-semibold">
                        👋 Welcome To Online Library System
                    </h1>
                    <p className="mt-4 opacity-80 tracking-wider text-sm md:text-base">
                        An interactive and minimal Online Library System built
                        with React and Redux. The app allows users to browse
                        book categories, view book details, add new books, and
                        search/filter the collection — all with smooth routing
                        and state management.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm md:text-base">
                        {categories.map((c) => {
                            return (
                                <Link
                                    key={`category-${c}`}
                                    className="flex"
                                    to={`/books/${c.toLowerCase()}`}
                                >
                                    <span
                                        className={`px-4 py-2 ${
                                            category
                                                ? category.toLowerCase() ===
                                                  c.toLowerCase()
                                                    ? "bg-yellow-400"
                                                    : "bg-gray-200"
                                                : "bg-gray-200"
                                        }  text-zinc-900 rounded-md`}
                                    >
                                        {c}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full flex items-center justify-center sticky top-18 sm:top-16 left-0 z-50">
                    <SearchForm />
                </div>

                <Outlet />
            </div>
        </main>
    );
};

export default MainLayout;
