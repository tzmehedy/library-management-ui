import { TableCell, TableRow } from '@/components/ui/table';
import type { IBook } from '@/types/bookTypes';
import { BookPlus, SquarePen, Trash } from 'lucide-react';

interface IBookTableRow{
    book: IBook;
}
const BookTableRow = ({ book }: IBookTableRow) => {
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
      <TableCell className="flex items-center space-x-2">
        <div title="Edit" className='cursor-pointer'>
          <SquarePen className="size-4 text-yellow-500"></SquarePen>
        </div>
        <div title='Delete' className='cursor-pointer'>
          <Trash className="size-4 text-red-600"></Trash>
        </div>
        <div title='Borrow' className='cursor-pointer'>
          <BookPlus className="size-4 text-green-600"></BookPlus>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookTableRow;