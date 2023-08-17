/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import {
  useAddBooCommentMutation,
  useBookDetailsQuery,
} from "../redux/features/book/bookApi";
import { IBook, Reviews } from "../types/interface";
import MyModal from "../utils/Modal";

import Spinner from "../utils/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../redux/hook/hook";
const BookDetails = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { id } = useParams();
  const [commentText, setCommentText] = useState("");
  console.log(commentText);
  const { data, isLoading, isError } = useBookDetailsQuery(id as string, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const book: IBook = data?.data;
  const navigate = useNavigate();
  // eslint-disable-next-line prefer-const
  let [isOpen, setIsOpen] = useState(false);
  const [addToReview, { isSuccess }] = useAddBooCommentMutation();

  function closeModal() {
    setIsOpen(false);
  }
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    navigate("/");
  }

  if (isSuccess) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    toast.success("Review Add Successfully");
  }
  function openModal() {
    setIsOpen(true);
  }
  console.log(data);

  const addReview = () => {
    const userId = localStorage.getItem("UserId");
    const option = {
      user: userId,
      bookId: book?._id,
      comment: commentText,
    };
    void addToReview(option);
  };

  return (
    <div>
      <Navbar />
      <div className="px-4">
        <div className="card m-auto  bg-white h-[70vh] max-w-7xl border mt-20">
          <div className=" grid lg:grid-cols-2  grid-cols-1 mt-10 lg:gap-5 gap-20 ">
            <div className="">
              <div className="relative  flex flex-wrap justify-center">
                <div className="relative h-[50vh] max-w-sm lg:min-w-[540px] w-[350px] bg-white shadow-md rounded-3xl p-2 mx-1 my-5 cursor-pointer">
                  <div className="overflow-x-hidden rounded-2xl relative">
                    <img
                      className="h-64 rounded-2xl w-full object-cover"
                      src={book?.picture?.url}
                    />
                  </div>
                  <div className="mt-4 pl-2 mb-2 flex justify-between ">
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-0">
                        Name: {book?.title}
                      </p>
                      <p className="text-md text-gray-800 mt-1">
                        Author: {book?.author}
                      </p>
                      <p className="text-md text-gray-800 mt-1">
                        Genre: {book?.genre}
                      </p>
                      <p className="text-md text-gray-800 mt-1">
                        Date: {book?.publicationDate}
                      </p>
                    </div>
                    {user === book.userId && (
                      <div className=" flex   gap-5  px-3 items-end">
                        <button
                          onClick={() =>
                            navigate(`/editBook/${book._id as string}`)
                          }
                          className="w-20 bg-blue-500 text-white h-7 rounded text-center px-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => openModal()}
                          className="w-20 bg-red-500  text-white  font-medium h-7 rounded text-center px-2"
                        >
                          delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className=" w-12"></div> */}
            <div className="pt-6 lg:pl-20 lg:pr-5">
              <div className=" h-80 border-l border-gray-200  overflow-y-scroll w-full px-4">
                <p>Reviews</p>

                <div>
                  {book?.reviews?.map((review: Reviews) => (
                    <div
                      key={review?._id}
                      className=" w-full flex flex-col gap-4 bg-white  mt-3 pr-5"
                    >
                      <div className=" border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                        <div className="grid grid-cols-6 p-5 gap-y-2">
                          <div>
                            <img
                              src={review?.user?.avatar}
                              className="max-w-16 max-h-16 rounded-full"
                            />
                          </div>

                          <div className="col-span-5 md:col-span-4 ml-4">
                            <p className="text-gray-600 font-bold">
                              {review?.user?.name}
                            </p>

                            <p className="text-gray-400">{review?.comment} </p>
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
                  ))}
                </div>
              </div>
              <ToastContainer />

              <div className="mt-5">
                <p>Add a review</p>
                <div>
                  <textarea
                    onChange={(e) => setCommentText(e.target.value)}
                    id="comment"
                    name="comment"
                    className="text-sm sm:text-base placeholder-gray-500 px-5 pr-4 rounded-lg border border-gray-400 w-full h- py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Comment"
                  />
                  <div
                    onClick={() => addReview()}
                    className=" w-full bg-slate-100 h-10 text-center rounded-2xl flex  justify-center items-center"
                  >
                    <button className=" bg-blue-600 w-full py-2 rounded-lg text-white">
                      Add Comment
                    </button>
                  </div>
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
