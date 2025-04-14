import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FilteredBook from "./pages/FilteredBook";
import Search from "./pages/Search";
import NotFound from "./components/NotFound";
import BrowseBooks from "./pages/BrowseBooks";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import BrowseLayout from "./layouts/BrowseLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/books/:category",
                element: <FilteredBook />,
            },
        ],
        errorElement: <NotFound />,
    },
    {
        path: "/",
        element: <BrowseLayout />,
        children: [
            {
                path: "/search/:search",
                element: <Search />,
            },
            {
                path: "/book/:bookId",
                element: <BookDetails />,
            },
            {
                path: "/browse-books",
                element: <BrowseBooks />,
            },
        ],
    },
    {
        path: "/add-book",
        element: <AddBook />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
