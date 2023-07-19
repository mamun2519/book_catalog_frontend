import React, { useEffect, useState } from "react";
import {
  useDeleteWishListMutation,
  useGetALLWishListQuery,
} from "../redux/features/wishlist/wishlistApi";
import Navbar from "../layouts/Navbar";
import { useAppSelector } from "../redux/hook/hook";
import { ToastContainer, toast } from "react-toastify";
import { wishList } from "../types/interface";
import Spinner from "../utils/Spinner";

const WishList = () => {
  // const { user } = useAppSelector((state) => state.auth);
  // console.log(user);
  const [user, setUser] = useState("");

  console.log(user);
  const { data, isLoading, isSuccess } = useGetALLWishListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [deleteWishList, { isSuccess: success, isError }] =
    useDeleteWishListMutation();

  const wishListDeleteHandler = (id: string) => {
    void deleteWishList(id);
  };
  if (isLoading) {
    return <Spinner />;
  }
  if (success) {
    toast.success("Delete successfully");
  }
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <div className="mt-20 mx-auto h-[60vh] border lg:w-[50vw] rounded">
          <div className="pt-6 lg:pl-20 lg:pr-5 px-4">
            <div className=" h-[57vh]  overflow-y-scroll w-full">
              <p>Wish List</p>
              <div>
                {data?.data !== null &&
                  data?.data?.map((review: wishList) => (
                    <div
                      key={review?.book?._id}
                      className=" flex flex-col gap-4 bg-white  mt-3 pr-5"
                    >
                      <div className=" border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                        <div className="grid grid-cols-6 p-5 gap-y-2">
                          <div>
                            <img
                              src={review?.book?.picture?.url}
                              className="w-20 max-h-20 rounded-full"
                            />
                          </div>

                          <div className="col-span-5 md:col-span-4 ml-4">
                            <p className="text-gray-600 font-bold">
                              Name: {review?.book?.title}
                            </p>
                            <p className="text-gray-600 font-bold">
                              Author: {review?.book?.author}
                            </p>
                            <p className="text-gray-600 font-bold">
                              Genre: {review?.book?.genre}
                            </p>
                            <p className="text-gray-600 font-bold">
                              Date: {review?.book?.publicationDate}
                            </p>
                          </div>

                          <div
                            onClick={() => wishListDeleteHandler(review?._id)}
                            className="flex justify-center items-center col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end cursor-pointer"
                          >
                            <p className="rounded-lg text-red-500 font-bold bg-red-100  py-1 px-3 text-sm w-fit h-fit">
                              Delete
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
