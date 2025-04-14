import { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/book-slice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        category: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setError("");
        const target = e.target;
        if (target) {
            const name = target.name;
            setFormData((p) => ({ ...p, [name]: target.value }));
        }
    };

    const validateForm = () => {
        if (
            !formData.author ||
            !formData.category ||
            !formData.description ||
            !formData.title
        ) {
            return "all fields are required";
        }

        if (formData.description.length < 50) {
            return "description must be atleast 50 characters long";
        }
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddBook = (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            return setError(error);
        }

        try {
            dispatch(addBook(formData));
            navigate("/browse-books");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <main className="w-dvw h-dvh text-white overflow-y-auto relative">
            <Navbar />
            <div className="flex w-full px-4 md:px-8 lg:px-16 xl:px-24 items-center justify-center gap-4 opacity-70 mt-4">
                <hr className="w-[20%] md:w-[10%] fill-gray-200 border-2 rounded-md" />
                <h2 className="sm:text-nowrap text-center text-xl md:text-3xl capitalize">
                    Add Book
                </h2>
                <hr className="w-[20%] md:w-[10%] fill-gray-200 border-2 rounded-md" />
            </div>
            <div className="w-full flex flex-col items-center gap-8 overflow-clip px-4 md:px-8 lg:px-16 xl:px-24">
                <form
                    className="w-full p-4 rounded-2xl flex flex-col items-start gap-4"
                    onSubmit={handleAddBook}
                >
                    {error ? (
                        <p className="text-red-800 text-lg w-full bg-red-200/50 px-4 py-2 rounded-md">
                            {error}
                        </p>
                    ) : null}
                    <fieldset className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="title">
                            Book Title{" "}
                            <sup>
                                <span className="text-red-400 text-base">
                                    *
                                </span>
                            </sup>{" "}
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData.title}
                            className="w-full p-3 rounded-md bg-gray-800/50 border outline-none"
                            placeholder="Atomic Habit"
                            type="text"
                            name="title"
                            id="title"
                        />
                    </fieldset>
                    <fieldset className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="description">
                            Book Description{" "}
                            <sup>
                                <span className="text-red-400 text-base">
                                    *
                                </span>
                            </sup>{" "}
                        </label>
                        <textarea
                            onChange={handleChange}
                            value={formData.description}
                            className="w-full p-3 rounded-md bg-gray-800/50 border outline-none"
                            placeholder="An easy and proven way to build good habits and break bad ones."
                            name="description"
                            id="description"
                        />
                    </fieldset>
                    <fieldset className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="author">
                            Book Author{" "}
                            <sup>
                                <span className="text-red-400 text-base">
                                    *
                                </span>
                            </sup>{" "}
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData.author}
                            className="w-full p-3 rounded-md bg-gray-800/50 border outline-none"
                            placeholder="James Clear"
                            type="text"
                            name="author"
                            id="author"
                        />
                    </fieldset>
                    <fieldset className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="category">
                            Book Category{" "}
                            <sup>
                                <span className="text-red-400 text-base">
                                    *
                                </span>
                            </sup>{" "}
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData.category}
                            className="w-full p-3 rounded-md bg-gray-800/50 border outline-none"
                            placeholder="Self-Help"
                            type="text"
                            name="category"
                            id="category"
                        />
                    </fieldset>
                    <button
                        className="px-8 py-2 bg-gray-300 text-gray-900 rounded-md ml-auto mt-2 hover:bg-yellow-400 transition-all duration-300 ease-in-out cursor-pointer"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
};

export default AddBook;
