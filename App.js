import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./src/Product/Body"
import Header from "./src/Header/Header";
import Cart from "./src/Header/Cart";

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
                element: <Body/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]

    }
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
