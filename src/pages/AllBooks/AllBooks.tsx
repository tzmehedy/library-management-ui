import BookTable from "../Home/BookTable";

const AllBooks = () => {
    const limit:null = null
  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <BookTable limit={limit}></BookTable>
      </div>
    </div>
  );
};

export default AllBooks;
