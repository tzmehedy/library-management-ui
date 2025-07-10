import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetAllBooksQuery } from "@/redux/api/bookApis";
import BookTableRow from "./BookTableRow";
import type { IBook } from "@/types/bookTypes";
import { LoaderCircle } from "lucide-react";
import { Link } from "react-router";


const BookTable = () => {
    const {data, isLoading} = useGetAllBooksQuery(undefined)

   if(isLoading) return <div className="flex items-center justify-center"><LoaderCircle className="text-blue-600 font-bold"></LoaderCircle></div>
    

    return (
      <>
        <div className="text-center">
          <h1 className="font-bold text-3xl underline mb-10">Book List</h1>
        </div>
        <div className="mb-4 text-end ">
          <Link
            to={"/create-book"}
            className="outline px-3 py-2 rounded-xl bg-blue-500 text-white font-bold"
            type="button"
          >
            Add Book
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead className="">ISBN</TableHead>
              <TableHead className="">Copies</TableHead>
              <TableHead className="">Available</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data?.map((book: IBook) => (
              <BookTableRow key={book._id} book={book}></BookTableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
};

export default BookTable;