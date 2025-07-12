import { TableCell, TableRow } from '@/components/ui/table';
import type { IBook } from '@/types/bookTypes';
import { BookPlus, LoaderCircle, SquarePen } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import { useDeleteBookMutation } from '@/redux/api/bookApis';
import { toast } from 'react-toastify';

interface IBookTableRow{
    book: IBook;
}
const BookTableRow = ({ book }: IBookTableRow) => {
  const [deleteBook, {isLoading}] = useDeleteBookMutation()

  const handelDelete = async(id:string) =>{
    const result = await deleteBook(id)
    if(result?.data?.success === true){
      toast.success("The book is successfully deleted")
    }
  }

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <LoaderCircle className="text-blue-600 font-bold"></LoaderCircle>
      </div>
    )
  return (
    <TableRow>
      <TableCell className="font-medium">{book?.title}</TableCell>
      <TableCell>{book?.author}</TableCell>
      <TableCell>{book?.genre}</TableCell>
      <TableCell className="">{book?.isbn}</TableCell>
      <TableCell className="">{book?.copies}</TableCell>
      <TableCell className="">
        {book?.available === true ? "Yes" : "No"}
      </TableCell>
      <TableCell className="flex items-center justify-center space-x-2">
        <div title="Edit" className="cursor-pointer">
          <SquarePen className="size-4 text-yellow-500"></SquarePen>
        </div>
        <div title="Delete">
          <AlertDialog>
            <AlertDialogTrigger className="flex justify-center items-center">
              <Trash className="size-4 text-red-500 cursor-pointer"></Trash>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure to delete?</AlertDialogTitle>
                <AlertDialogDescription>
                  Once you delete the book, you can not find the book
                  information.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => handelDelete(book?._id)}
                  className="bg-red-600"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div title="Borrow" className="cursor-pointer">
          <BookPlus className="size-4 text-green-600"></BookPlus>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookTableRow;