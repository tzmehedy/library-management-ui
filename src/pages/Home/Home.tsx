import { Link } from "react-router";
import BookTable from "./BookTable";



const Home = () => {
  const limit:number = 5
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="w-[90%] lg:w-[60%]">
          <BookTable limit={limit}></BookTable>
        </div>

        <div className="mt-4">
          <Link to={"/books"} className="bg-blue-500 px-3 py-3 rounded-xl text-white font-bold" type="button">Show All Books</Link>
        </div>
      </div>
    );
};

export default Home;