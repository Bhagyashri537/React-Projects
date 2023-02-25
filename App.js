import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Store from "./src/Product/Store"
import Header from "./src/Header/Header";
import Cart from "./src/Header/Cart";
import About from "./src/Header/About";
import Home from "./src/Header/Home"
import CartProvider from "./src/store/CartProvider";

const AppLayout = () => {
    return (
    <>
     <Header/>
     <Outlet/>
     </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children: [
            {
                path: "/",
                element: <Store/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/home",
                element: <Home/>
            },
        ]

    }
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<CartProvider><RouterProvider router={appRouter}/></CartProvider>)
