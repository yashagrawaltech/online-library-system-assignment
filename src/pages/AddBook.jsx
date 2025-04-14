// import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const AddBook = () => {
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
                <form className="w-full p-4 rounded-2xl flex flex-col items-start gap-4">
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
                            className="w-full p-3 rounded-md bg-gray-800/50 border outline-none"
                            placeholder="Self-Help"
                            type="text"
                            name="category"
                            id="category"
                        />
                    </fieldset>
                    <fieldset className="flex flex-col items-start gap-2 w-full">
                        <label htmlFor="cover">
                            Book Cover{" "}
                            <sup>
                                <span className="text-red-400 text-base">
                                    *
                                </span>
                            </sup>{" "}
                        </label>
                        <input
                            className="w-full p-3 rounded-md bg-gray-800/50 border outline-none cursor-pointer"
                            placeholder="Self-Help"
                            type="file"
                            accept="image/*"
                            name="cover"
                            id="cover"
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
