import { Outlet } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";

const BrowseLayout = () => {
    return (
        <main className="w-dvw h-dvh text-white overflow-y-auto relative">
            <Navbar />
            <div className="w-full flex flex-col items-center gap-8 overflow-clip">
                <div className="w-full flex items-center justify-center sticky top-18 sm:top-16 left-0 z-40">
                    <SearchForm />
                </div>

                <Outlet />
            </div>
        </main>
    );
};

export default BrowseLayout;
