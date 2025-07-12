import { useGetAllBooksByPaginationQuery, useGetAllBooksQuery } from "@/redux/api/bookApis";
import BookTable from "../Home/BookTable";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";


const AllBooks = () => {
    const limit: null = null
    const {data: allBooks} = useGetAllBooksQuery({limit})
    const [page,setPage] = useState(1)
    
    let pages: number[] = [];

    const itemShowPerPage = 5;

    const numberOfPages = Math.ceil(allBooks?.data?.length / itemShowPerPage);

     if (numberOfPages) {
       pages = [...Array(numberOfPages).keys()];
     }
    const size = itemShowPerPage
    const { data:paginationBooks, isLoading } = useGetAllBooksByPaginationQuery({ page,size });
    if (isLoading)
        return (
          <div className="flex items-center justify-center">
            <LoaderCircle className="text-blue-600 font-bold"></LoaderCircle>
          </div>
        );
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <BookTable data={paginationBooks} isLoading={isLoading}></BookTable>
      </div>

      <div className="flex space-x-5 my-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="cursor-pointer"
        >
          Previous
        </button>
        {pages?.map((i) => (
          <button
            onClick={() => setPage(i + 1)}
            className={`border-2 border-blue-500 px-2 cursor-pointer ${page===i+1 ? "bg-gray-500" :""} `}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === numberOfPages}
          className="cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
