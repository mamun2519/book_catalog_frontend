import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    void fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div className="  flex m-auto  max-w-7xl gap-5 mt-10">
      <div className="w-36">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas
        laboriosam, illo soluta repellat vero animi. Quod voluptatum quia
        labore.
      </div>
      <div className=" flex-1 w-full">
        <div className="grid grid-cols-4 gap-5">
          {books.map((book, index) => (
            <Book key={index} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
