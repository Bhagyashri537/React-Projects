import ReactDOM from "react-dom/client";
import Product from "./src/Product/Product";

const App = () => {
    return (
     <Product/>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
