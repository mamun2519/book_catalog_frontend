/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Book from "./Book";
import { useGetALLBookQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/interface";
import Spinner from "../utils/Spinner";

const Books = () => {
  const { data, isLoading } = useGetALLBookQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const book: IBook[] = data?.data;

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="  lg:flex m-auto  max-w-7xl gap-5 mt-10">
      <div className="w-50">
        <div className="mt-5">
          <h1>Filter Book</h1>
          <div className="mt-2">
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox "
                // checked={review?.readSoon}
                // onClick={() => readSoonHandler(review?._id)}
              />
              <span>genre</span>
            </div>
          </div>
          <div className="mt-2">
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox "
                // checked={review?.readSoon}
                // onClick={() => readSoonHandler(review?._id)}
              />
              <span>publication year.</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 w-full">
        <div className="grid lg:grid-cols-4  grid-cols-1 gap-5">
          {book?.map((book: IBook) => (
            <Book key={book._id} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
