import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div>
      <Link to="/movies">
       <button>Movies</button>
      </Link>
    </div>
    <div className="flex items-center justify-center h-screen">
        
      <table className="shadow-lg bg-white border-separate content-center">
        <tr>
          <td className="border px-8 py-4">July 9</td>
          <td className="border px-8 py-4">DETROIT, MI</td>
          <td className="border px-8 py-4">DTE ENERGY MUSIC THEATRE</td>
          <td className="pl-2 pr-2 bg-blue-200 rounded-lg">BUY TICKETS</td>
        </tr>
        <tr>
          <td className="border px-8 py-4">July 11</td>
          <td className="border px-8 py-4">TORONTO,ON</td>
          <td className="border px-8 py-4">BUDWEISER STAGE</td>
          <td className="pl-2 pr-2 bg-blue-200 rounded-lg">BUY TICKETS</td>
        </tr>
        <tr>
          <td className="border px-8 py-4">July 13</td>
          <td className="border px-8 py-4">BRISTOW, VA</td>
          <td className="border px-8 py-4">JIGGY LUBE LIVE</td>
          <td className="pl-2 pr-2 bg-blue-200 rounded-lg">BUY TICKETS</td>
        </tr>
        <tr>
          <td className="border px-8 py-4">July 21</td>
          <td className="border px-8 py-4">PHOENIX, AZ</td>
          <td className="border px-8 py-4">AK-CHIN PAVILION</td>
          <td className="pl-2 pr-2 bg-blue-200 rounded-lg">BUY TICKETS</td>
        </tr>
        <tr>
          <td className="border px-8 py-4">July 27</td>
          <td className="border px-8 py-4">LAS VEGAS, NV</td>
          <td className="border px-8 py-4">T-MOBILE ARENA</td>
          <td className="pl-2 pr-2 bg-blue-200 rounded-lg">BUY TICKETS</td>
        </tr>
      </table>
    </div>
    
    </>
  );
};
export default Home;
