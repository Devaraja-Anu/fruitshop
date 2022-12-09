import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div className="flex justify-start items-center h-20 border-b-2">
        <NavLink
          className="font-sans text-xl sm:text-4xl px-4 font-semibold  hover:scale-105 hover:text-background transition-all"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="font-sans text-xl sm:text-4xl px-4 font-semibold  hover:scale-105 hover:text-background transition-all"
          to="/products"
        >
          Products
        </NavLink>

        <NavLink
          className="font-sans text-xl sm:text-4xl px-4 font-semibold  hover:scale-105 hover:text-background transition-all"
          to="/Login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar