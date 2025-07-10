 import { Link } from "react-router"
import logo from "../../public/logo.png"
import { Menu } from "lucide-react";

const NavBar = () => {
    return (
      <div className="container mx-auto flex justify-between items-center px-3 lg:px-0">
        <Link to={"/"} className="flex items-center space-x-2">
          <img className="w-10 h-10 lg:w-34 lg:h-20" src={logo} alt="" />
          <h1 className="font-bold text-sm lg:text-xl">Library Management</h1>
        </Link>
        <div className="hidden md:inline-block">
          <ul className="flex space-x-10">
            <li>
              <Link to={"/books"}>All Books</Link>
            </li>
            <li>
              <Link to={"/create-book"}>Add Book</Link>
            </li>
            <li>
              <Link to={"/borrow-summary"}>Borrow Summary</Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
            <Menu />
        </div>
      </div>
    );
};

export default NavBar