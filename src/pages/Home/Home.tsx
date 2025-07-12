import { Link } from "react-router";
import BookTable from "./BookTable";
import {useGetAllBooksQuery } from "@/redux/api/bookApis";

const Home = () => {
  const limit = 5
  const { data, isLoading } = useGetAllBooksQuery({ limit });
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="w-[90%] lg:w-[60%]">
          <BookTable data={data} isLoading={isLoading}></BookTable>
        </div>

        <div className="mt-4">
          <Link to={"/books"} className={`bg-blue-500 px-3 py-1 rounded-xl text-white font-bold ${isLoading? "hidden" : "inline-block"}`} type="button">Show All Books</Link>
        </div>
      </div>
    );
};

export default Home;