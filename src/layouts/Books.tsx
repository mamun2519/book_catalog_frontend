/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Book from "./Book";
import { useGetALLBookQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/interface";

const Books = () => {
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   void fetch("/public/data.json")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);
  const { data, error, isLoading } = useGetALLBookQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const book: IBook[] = data?.data;

  return (
    <div className="  flex m-auto  max-w-7xl gap-5 mt-10">
      <div className="w-36">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas
        laboriosam, illo soluta repellat vero animi. Quod voluptatum quia
        labore.
      </div>
      <div className=" flex-1 w-full">
        <div className="grid grid-cols-4 gap-5">
          {book?.map((book: IBook) => (
            <Book key={book._id} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
