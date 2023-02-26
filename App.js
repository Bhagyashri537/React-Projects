import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Store from "./src/Product/Store"
import Header from "./src/Header/Header";
import Cart from "./src/Header/Cart";
import About from "./src/Header/About";
import Home from "./src/Header/Home"
import {  useState } from "react";


const AppLayout = () => {

   

    const [movie, setMovie] = useState([])
    async function fetchMovieHandler () {
        const data = await fetch('https://swapi.dve/api/films')
        const json = await data.json()
        
  
    const maindata = data.results.map(item => {
        return {
            id:item.episode_id,
            title:item.title,
            openingText : item.opening_crawl,
            releaseDate:item.releas_date
        }
    })
    setMovie(maindata)
}
    
    return (
    <>
     <Header/>
     <section>
        <button onClick={fetchMovieHandler}>btn</button>
     </section>
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
                path: "/about",
                element: <About/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
        ]

    }
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
