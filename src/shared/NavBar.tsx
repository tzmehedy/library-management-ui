 import { Link } from "react-router"
import logo from "../../public/logo.png"
import { Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [open,setOpen] = useState(false)

  console.log(open)

  
    return (
      <div className="container mx-auto flex justify-between items-center px-3 lg:px-0 relative">
        <Link to={"/"} className="flex items-center space-x-2">
          <img className="w-10 h-10 lg:w-34 lg:h-20" src={logo} alt="" />
          <h1 className="font-bold text-sm lg:text-xl">Library Management</h1>
        </Link>

        {/* lg menu */}
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

        {/* sm menu */}
        {open && (
          <div className="text-end md:hidden absolute top-10 right-2 ">
            <ul className="bg-blue-500 p-5 rounded-xl opacity-80 text-white">
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
        )}
        <div className="md:hidden">
          <button onMouseLeave={()=>setOpen(!open)} onClick={() => setOpen(!open)} className="cursor-pointer">
            <Menu />
          </button>
        </div>
      </div>
    );
};

export default NavBar