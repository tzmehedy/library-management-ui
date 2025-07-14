import { Facebook, Github, Twitter } from "lucide-react";
import logo from "../../public/logo.png"
const Footer = () => {
    return (
      <div className="px-5 md:px-20 py-5 bg-blue-200 opacity-80 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex  items-center space-x-2">
            <img className="w-30 h-20" src={logo} alt="" />
            <h1 className="text-xl font-bold">Library Management</h1>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <h1 className="text-xl underline font-bold">Social Media Links</h1>
            <div className="text-blue-800 font-bold flex justify-center items-center space-x-5">
              <Facebook></Facebook>
              <Twitter></Twitter>
              <Github></Github>
            </div>
          </div>
        </div>

        <div>
          <div className="text-gray-800">
            <hr className="" />
            <div className="flex justify-center">
              <small>
                Copyright © 2025 - All right reserved by Library Management
              </small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;