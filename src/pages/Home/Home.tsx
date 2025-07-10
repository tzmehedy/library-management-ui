import BookTable from "./BookTable";



const Home = () => {
 

    return (
      <div className="flex justify-center mt-20">
        <div className="w-[90%] lg:w-[60%]">
          <BookTable></BookTable>
        </div>
      </div>
    );
};

export default Home;