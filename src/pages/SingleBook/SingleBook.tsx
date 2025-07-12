import { useGetBookByIdQuery } from "@/redux/api/bookApis";
import { LoaderCircle } from "lucide-react";
import { useParams } from "react-router";

const SingleBook = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useGetBookByIdQuery(id);
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <LoaderCircle className="text-blue-600 font-bold"></LoaderCircle>
      </div>
    );

  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%] lg:w-[40%] border-3 border-blue-600 p-10 space-y-3 shadow-2xl shadow-blue-200">
        <h1 className="text-4xl font-bold">Title: {data?.data?.title}</h1>
        <h1>
          Author: <span className="text-sky-600">{data?.data?.author}</span>
        </h1>
        <p>Description: {data?.data?.description}</p>
        <h1>Genre: {data?.data?.genre}</h1>
        <h1>ISBN No: {data?.data?.isbn}</h1>
        <h1>Available Copies: {data?.data?.copies}</h1>
        <button className="bg-blue-500 text-white font-bold px-3 py-2 rounded-2xl cursor-pointer">Borrow Now</button>
      </div>
    </div>
  );
};

export default SingleBook;
