/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  useFilterBooksQuery,
  useGetALLBookQuery,
  useGetSearchedBooksQuery,
} from "../redux/features/book/bookApi";
import { IBook } from "../types/interface";
import Spinner from "../utils/Spinner";
import Book from "../layouts/Book";
import Navbar from "../layouts/Navbar";
import { ChangeEvent, useState } from "react";

const BookPage = () => {
  let userData = null;
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const { data, isLoading } = useGetSearchedBooksQuery(
    `searchTerm=${searchText}`,
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    }
  );
  const { data: filterdata, isLoading: filterLoading } = useFilterBooksQuery(
    `genre=${selectedOption}&year=${selectedYear}`,
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    }
  );

  userData = data;

  if (selectedOption && selectedYear) {
    userData = filterdata;
  }
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSelectGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSelectYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };
  if (isLoading || filterLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar />
      <div className="  lg:flex m-auto   w-[80vw] gap-5 mt-10">
        <div className="w-50">
          <div className="mt-5">
            <h1>Searching</h1>
            <div>
              <input
                id="email"
                type="text"
                onChange={handleSearch}
                className="input input-bordered w-full mt-2"
                placeholder="Search (title, author, genre)"
              />
              <div className="mt-3 flex justify-around">
                <select
                  value={selectedOption}
                  onChange={handleSelectGenreChange}
                  className="input input-bordered w-full"
                >
                  <option value="">All (genre)</option>
                  {[
                    ...new Set<string>(
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      data?.data?.map((book: IBook) => book.genre)
                    ),
                  ].map((genre: string) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedYear}
                  onChange={handleSelectYearChange}
                  className="input input-bordered"
                >
                  <option value="">All (year)</option>
                  {[
                    ...new Set<string>(
                      data?.data?.map((book: IBook) =>
                        new Date(book.publicationDate).getFullYear()
                      )
                    ),
                  ].map((year: string) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1 w-full">
          <div className="grid lg:grid-cols-4  grid-cols-1 gap-5">
            {/* // eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
            {userData?.data?.map((book: IBook) => (
              <Book key={book._id} book={book}></Book>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
