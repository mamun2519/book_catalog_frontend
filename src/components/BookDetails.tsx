/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useBookDetailsQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/interface";
import MyModal from "../utils/Modal";

const BookDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useBookDetailsQuery(id as string, {});
  const book: IBook = data?.data;
  const navigate = useNavigate();
  // eslint-disable-next-line prefer-const
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  console.log(book);
  return (
    <div>
      <Navbar />
      <div className="card m-auto  h-[70vh] max-w-7xl border mt-20">
        <div className=" grid grid-cols-2 ">
          <div className="">
            <div className="relative  flex flex-wrap justify-center">
              <div className="relative h-[50vh] max-w-sm min-w-[540px] bg-white shadow-md rounded-3xl p-2 mx-1 my-5 cursor-pointer">
                <div className="overflow-x-hidden rounded-2xl relative">
                  <img
                    className="h-64 rounded-2xl w-full object-cover"
                    src={book?.picture?.url}
                  />
                  <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                </div>
                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p className="text-lg font-semibold text-gray-900 mb-0">
                      {book?.title}
                    </p>
                    <p className="text-md text-gray-800 mt-0">{book?.author}</p>
                    <p className="text-md text-gray-800 mt-0">{book?.genre}</p>
                    <p className="text-md text-gray-800 mt-0">
                      {book?.publicationDate}
                    </p>
                  </div>
                  <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex gap-5 px-16">
              <button
                onClick={() => navigate(`/editBook/${book._id as string}`)}
                className="w-20 bg-slate-100 h-7 rounded text-center px-2"
              >
                Edit
              </button>
              <button
                onClick={() => openModal()}
                className="w-20 bg-slate-100 h-7 rounded text-center px-2"
              >
                delete
              </button>
            </div>
          </div>

          {/* <div className=" w-12"></div> */}
          <div className="pt-6 pl-20 pr-5">
            <div className=" h-96  overflow-y-scroll w-full">
              <p>Reviews</p>
              <div className=" flex flex-col gap-4 bg-white pr-5 ">
                <div className=" border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                  <div className="grid grid-cols-6 p-5 gap-y-2">
                    <div>
                      <img
                        src="https://picsum.photos/seed/2/200/200"
                        className="max-w-16 max-h-16 rounded-full"
                      />
                    </div>

                    <div className="col-span-5 md:col-span-4 ml-4">
                      <p className="text-gray-600 font-bold"> Mamun Islam</p>

                      <p className="text-gray-400">Vew Nice </p>
                    </div>

                    <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                      <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
                        {" "}
                        NOW
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-4 bg-white  mt-3 pr-5">
                <div className=" border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                  <div className="grid grid-cols-6 p-5 gap-y-2">
                    <div>
                      <img
                        src="https://picsum.photos/seed/2/200/200"
                        className="max-w-16 max-h-16 rounded-full"
                      />
                    </div>

                    <div className="col-span-5 md:col-span-4 ml-4">
                      <p className="text-gray-600 font-bold"> Mamun Islam</p>

                      <p className="text-gray-400">Vew Nice </p>
                    </div>

                    <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                      <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
                        {" "}
                        NOW
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p>Add a review</p>
              <div>
                <textarea
                  id="comment"
                  name="comment"
                  className="text-sm sm:text-base placeholder-gray-500 px-5 pr-4 rounded-lg border border-gray-400 w-full h- py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter Comment"
                />
                <div className=" w-full bg-slate-100 h-7 rounded text-center">
                  <button>Add Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <MyModal
          id={book?._id}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          closeModal={closeModal}
          openModal={openModal}
        ></MyModal>
      )}
    </div>
  );
};

export default BookDetails;
