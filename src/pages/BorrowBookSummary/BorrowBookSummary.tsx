import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBorrowSummaryQuery } from "@/redux/api/bookApis";
import { LoaderCircle } from "lucide-react";

interface IBorrowBookSummary{
    book:{
        title:string,
        isbn:string,
    },
    totalQuantity: number
}

const BorrowBookSummary = () => {
  const { data, isLoading } = useBorrowSummaryQuery(undefined);
  const summaryBooksData = data?.data;
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <LoaderCircle className="text-blue-600 font-bold"></LoaderCircle>
      </div>
    );
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Borrow Books Summary...</h1>
      </div>

      <div className="flex justify-center items-center my-20">
        <div className="w-[30%]">
          <Table className="">
            <TableHeader>
              <TableRow className="">
                <TableHead className="font-bold text-xl">Title</TableHead>
                <TableHead className="font-bold text-xl">ISBN</TableHead>
                <TableHead className="font-bold text-xl">Quantity</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {summaryBooksData?.map((summary: IBorrowBookSummary) => (
                <TableRow>
                  <TableCell className="font-medium">
                    {summary?.book?.title}
                  </TableCell>
                  <TableCell className="font-medium">
                    {summary?.book?.isbn}
                  </TableCell>
                  <TableCell className="font-medium">
                    {summary?.totalQuantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BorrowBookSummary;
