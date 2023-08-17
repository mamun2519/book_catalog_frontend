import { IBook } from "../types/interface";
import { useNavigate } from "react-router-dom";
import { useAddWishlistMutation } from "../redux/features/wishlist/wishlistApi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AiFillRead } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { useAddReadlistMutation } from "../redux/features/readList/readList";
import { useAppSelector } from "../redux/hook/hook";
interface IProps {
  book: IBook;
}
const Book = ({ book }: IProps) => {
  const { user } = useAppSelector((state) => state.auth);

  const [addWishList, { isSuccess, isError }] = useAddWishlistMutation();
  const [addReadList, { isSuccess: success }] = useAddReadlistMutation();
  console.log(isSuccess, isError);
  const navigate = useNavigate();
  if (isSuccess) {
    toast.success("wishList Add Successfully");
  }
  if (success) {
    toast.success("readList Add Successfully");
  }
  console.log(success);

  const addWishlistHandler = () => {
    if (!user) {
      toast.error("Please you need to first Login");
    } else {
      const userId = localStorage.getItem("UserId");
      const options = {
        user: userId,
        book: book?._id,
      };
      void addWishList(options);
    }
  };
  const addReadlistHandler = () => {
    if (!user) {
      toast.error("Please you need to first login");
    } else {
      const userId = localStorage.getItem("UserId");
      const options = {
        user: userId,
        book: book?._id,
      };
      void addReadList(options);
    }
  };
  return (
    <div className="">
      <div className="relative mx-3 flex flex-wrap justify-center  h-96">
        <div className="relative max-w-sm min-w-[240px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img
              className="h-40 rounded-2xl w-full object-cover"
              src={book?.picture?.url}
            />
          </div>
          <div className="mt-4 pl-2 mb-2 flex justify-between h-32">
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
            <div className="flex  mb-1 mr-4 group cursor-pointer  gap-2">
              <div
                onClick={() => addWishlistHandler()}
                className="tooltip"
                data-tip="Wishlist"
              >
                <span className=" text-2xl text-red-500">
                  <GiSelfLove></GiSelfLove>
                </span>
              </div>

              <div
                onClick={() => addReadlistHandler()}
                className="h-6 w-6 group-hover:opacity-70 flex items-center tooltip"
                data-tip="Readlist"
              >
                <span className=" text-2xl text-green-700">
                  <AiFillRead />
                </span>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate(`/bookDetails/${book._id as string}`)}
            className=" w-full bg-blue-600 text-white   font-medium h-8 text-center flex justify-center items-center mt-2 rounded-2xl"
          >
            <button className=" h-8 flex justify-center items-center ">
              Details
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Book;
