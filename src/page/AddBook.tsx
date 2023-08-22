/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */

import Navbar from "../layouts/Navbar";
import { IBook } from "../types/interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { useAddBookMutation } from "../redux/features/book/bookApi";
import { ToastContainer, toast } from "react-toastify";
import { useAppSelector } from "../redux/hook/hook";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [addBook, { data, isSuccess }] = useAddBookMutation();

  const { user } = useAppSelector((state) => state.auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IBook>();
  const onSubmit: SubmitHandler<IBook> = (data) => {
    const options: IBook = {
      ...data,
      year: new Date(data.publicationDate).getFullYear(),
      userId: user as string | null,
    };
    void addBook(options);
    reset();
  };

  if (data?.success) {
    toast.success("book add successfully");
    // navigate("/");
  }

  console.log(data);
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-6">
                <div className="">
                  <input
                    {...register("picture", {
                      required: {
                        value: true,
                        message: "picture is Required",
                      },
                    })}
                    placeholder="Enter Your Pic Url"
                    type="text"
                    className="file-input file-input-bordered  text-sm sm:text-base placeholder-gray-500   rounded-lg border border-gray-400 w-full  focus:outline-none focus:border-blue-400 px-6"
                  />
                  <label className="label">
                    {errors.picture?.type === "required" && (
                      <span className="text-red-500">
                        {errors.picture.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Title is Required",
                      },
                    })}
                    id="title"
                    type="text"
                    name="title"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full h-12 py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter title"
                  />
                  <label className="label">
                    {errors.title?.type === "required" && (
                      <span className="text-red-500">
                        {errors?.title?.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    {...register("genre", {
                      required: {
                        value: true,
                        message: "genre is Required",
                      },
                    })}
                    id="genre"
                    type="text"
                    name="genre"
                    className="text-sm h-12 sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Genre"
                  />
                  <label className="label">
                    {errors.genre?.type === "required" && (
                      <span className="text-red-500">
                        {errors?.genre?.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    {...register("author", {
                      required: {
                        value: true,
                        message: "author is Required",
                      },
                    })}
                    id="author"
                    type="text"
                    name="author"
                    className="text-sm h-12 sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter author"
                  />
                  <label className="label">
                    {errors.author?.type === "required" && (
                      <span className="text-red-500">
                        {errors.author.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    {...register("publicationDate", {
                      required: {
                        value: true,
                        message: "publicationDate is Required",
                      },
                    })}
                    id="publicationDate"
                    type="date"
                    name="publicationDate"
                    className="text-sm h-12 sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Genre"
                  />
                  <label className="label">
                    {errors.publicationDate?.type === "required" && (
                      <span className="text-red-500">
                        {errors?.publicationDate?.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex items-center mb-6 -mt-4"></div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center h-12 justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">add book</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <ToastContainer />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
