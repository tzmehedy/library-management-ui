import BookTable from "./BookTable";



const Home = () => {
 

    return (
      <div className="flex justify-center mt-20">
        <div className="lg:w-[60%]">
          <BookTable></BookTable>
        </div>
      </div>
    );
};

export default Home;