import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchInput) {
            navigate(`/search/${searchInput.toLowerCase()}`);
        }
    };

    return (
        <form
            onSubmit={handleSearch}
            className="w-[80%] md:w-[40%] h-19 bg-blend-color-burn pr-4 pl-8 bg-white/90 flex justify-between items-center gap-4 rounded-full text-gray-900 backdrop-blur-sm"
            action=""
        >
            <input
                className="w-full outline-none"
                value={searchInput}
                onChange={(e) => setSearchInput(e.currentTarget.value)}
                type="text"
                placeholder="AI Book"
            />
            <button
                className="px-8 h-12 flex items-center gap-2 rounded-full bg-gray-950 text-white hover:bg-yellow-400 hover:text-zinc-900 transition-all duration-300 ease-in-out"
                type="submit"
            >
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
                search
            </button>
        </form>
    );
};

export default SearchForm;
