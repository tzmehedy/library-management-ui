import NavBar from "@/shared/NavBar";
import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className="font-[Roboto]">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;