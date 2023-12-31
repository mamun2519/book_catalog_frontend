/* eslint-disable @typescript-eslint/no-unsafe-assignment */

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
  const { data, isLoading } = useGetALLreadListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [deleteReadList, { isSuccess: success, isLoading: deleteLoading }] =
    useDeleteReadListMutation();
  const [updateReadList, { isSuccess: upSuccess, isLoading: UpdateLoading }] =
    useUpdateReadlistMutation();

  const wishListDeleteHandler = (id: string) => {
    void deleteReadList(id);
  };
  if (deleteLoading || UpdateLoading || isLoading) {
    return <Spinner />;
  }
  if (success) {
    toast.success("Delete successfully");
  }
  if (upSuccess) {
    toast.success("Update successfully");
  }
  const readListChangeHendler = (id: string, value: boolean) => {
    const options = {
      id: id,
      data: {
        reading: value,
        readSoon: false,
        complete: false,
      },
    };
    void updateReadList(options);
  };

  const readSoonHandler = (id: string, value: boolean) => {
    const options = {
      id: id,
      data: {
        reading: false,
        readSoon: value,
        complete: false,
      },
    };
    void updateReadList(options);
  };

  const completeListChangeHandler = (id: string, value: boolean) => {
    const options = {
      id: id,
      data: {
        reading: false,
        readSoon: false,
        complete: value,
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
                                    className="checkbox checkbox-xs"
                                    onClick={() =>
                                      readListChangeHendler(
                                        review?._id,
                                        !review.readSoon
                                      )
                                    }
                                    checked={review?.reading}
                                  />
                                  <span>Read Soon</span>
                                </div>
                              </div>
                              <div className="mt-1">
                                <div className=" flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    className="checkbox  checkbox-xs"
                                    checked={review?.complete}
                                    onClick={() =>
                                      completeListChangeHandler(
                                        review?._id,
                                        !review.complete
                                      )
                                    }
                                  />
                                  <span>currently reading</span>
                                </div>
                              </div>
                              <div className="mt-1">
                                <div className=" flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    className="checkbox checkbox-xs"
                                    checked={review?.readSoon}
                                    onClick={() =>
                                      readSoonHandler(
                                        review?._id,
                                        !review.reading
                                      )
                                    }
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
