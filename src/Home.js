import TextLeft from "./components/textleft";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import fruits1 from "./images/fruits1.jpg";
import ImageScroll from "./components/ImageScroll";
import { NavLink } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


function Home() { 


  return (
    <div className=" overflow-x-hidden overflow-y-clip">
      <div className="h-screen  w-screen">
        <img
          className=" object-cover h-screen w-screen off absolute"
          src={fruits1}
          alt="some fruits in a table"
        />

        <div className="bg-white w-screen z-10 fixed">
          <Navbar />
        </div>

        <div className="relative h-screen w-screen flex flex-col justify-center ">
          <h1 className="textshadow text-white  font-extrabold text-5xl lg:text-8xl pb-6 pl-7 md:pl-16 drop-shadow-2xl">
            GROCERIES CORNER
          </h1>
          <p className="text-white font-headings font-extrabold text-4xl lg:text-5xl pl-7 md:pl-16 ">
            Great quality products without compromise
          </p>
        </div>
      </div>
      {/* Part 1 */}
      <TextLeft />
      <div className="w-screen h-screen flex  bg-orange-400 text-white text-5xl">
        <div className="w-9/12 ">
          <ImageScroll />
        </div>
        <NavLink
          className="text-white text-6xl flex items-center pl-10"
          to="/products"
        >
          More Products
        </NavLink>
      </div>
      <ScrollToTop/>
      <div className="w-screen">
        <Footers />
      </div>
    </div>
  );
}

export default Home;
