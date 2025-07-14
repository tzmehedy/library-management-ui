import Footer from "@/shared/Footer";
import NavBar from "@/shared/NavBar";
import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className="font-[Roboto]">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;