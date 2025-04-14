import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FilteredBook from "./pages/FilteredBook";
import Search from "./pages/Search";
import NotFound from "./components/NotFound";

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
        errorElement: <NotFound />
    },
    {
      path: '/search/:search',
      element: <Search />
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
