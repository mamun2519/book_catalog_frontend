/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";

import {
  useDeleteReadListMutation,
  useGetALLreadListQuery,
  useUpdateReadlistMutation,
} from "../redux/features/readList/readList";
import Spinner from "../utils/Spinner";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../layouts/Navbar";
import { readList } from "../types/interface";

const ReadList = () => {
  const [readCheck, setReadCheck] = useState(false);
  const [completeCheck, setCompleteCheck] = useState(false);
  const [readSoon, setReadSoon] = useState(false);

  const { data, isLoading } = useGetALLreadListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [deleteReadList, { isSuccess: success }] = useDeleteReadListMutation();
  const [updateReadList, { isSuccess: upSuccess }] =
    useUpdateReadlistMutation();

  const wishListDeleteHandler = (id: string) => {
    void deleteReadList(id);
  };
  if (isLoading) {
    return <Spinner />;
  }
  if (success) {
    toast.success("Delete successfully");
  }
  if (upSuccess) {
    toast.success("Update successfully");
  }
  const readListChangeHendler = (id: string) => {
    setReadCheck(!readCheck);
    const options = {
      id: id,
      data: {
        reading: readCheck,
      },
    };
    void updateReadList(options);
  };

  const readSoonHandler = (id: string) => {
    setReadSoon(!readSoon);
    const options = {
      id: id,
      data: {
        readSoon: readSoon,
      },
    };
    void updateReadList(options);
  };

  const completeListChangeHandler = (id: string) => {
    setCompleteCheck(!completeCheck);
    const options = {
      id: id,
      data: {
        complete: completeCheck,
      },
    };
    void updateReadList(options);
  };

  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <div className="mt-20 mx-auto h-[70vh] border lg:w-[60vw] rounded">
          <div className="pt-6 lg:pl-20 lg:pr-5 px-4">
            <div className=" h-[65vh]  overflow-y-scroll w-full">
              <p>Read List</p>
              <div>
                {data?.data !== null &&
                  data?.data?.map((review: readList) => (
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
                            <div className="mt-5 flex gap-10">
                              <div className="mt-1">
                                <div className=" flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    className="checkbox "
                                    checked={review?.reading}
                                    onClick={() =>
                                      readListChangeHendler(review?._id)
                                    }
                                  />
                                  <span>Read Soon</span>
                                </div>
                              </div>
                              <div className="mt-1">
                                <div className=" flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    className="checkbox  "
                                    checked={review?.complete}
                                    onClick={() =>
                                      completeListChangeHandler(review?._id)
                                    }
                                  />
                                  <span>currently reading</span>
                                </div>
                              </div>
                              <div className="mt-1">
                                <div className=" flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    className="checkbox "
                                    checked={review?.readSoon}
                                    onClick={() => readSoonHandler(review?._id)}
                                  />
                                  <span>finished reading</span>
                                </div>
                              </div>
                            </div>
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

export default ReadList;
