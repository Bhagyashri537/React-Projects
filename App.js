import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Store from "./src/Product/Store"
import Header from "./src/Header/Header";
import Cart from "./src/Header/Cart";
import About from "./src/Header/About";
import Home from "./src/Header/Home"
import Movies from "./src/Header/Movies/Movies";
import Contact from "./src/Header/Contact";
import Login from "./src/Header/Login";
import ProductDetail from "./src/Product/ProductDetail";
import CartContext from "./src/store/CartContext";
//const store = import("./src/Product/Store")
const AppLayout = () => {
   
    return (
    <CartContext>
     <Header/>
     
     <Outlet/>
     </CartContext>
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
                path: "/about",
                element: <About/>
            },
            {
                path: "/home",
                element: <Home/>,
               
            },
            {
                path: "/contact",
                element: <Contact/>,
               
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/movies",
                element:<Movies/>
            },
            {
                path: "/product/:id",
                element:<ProductDetail/>
            },
            {
                path: "/login",
                element:<Login/>
            }
        
        ]

    }
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
