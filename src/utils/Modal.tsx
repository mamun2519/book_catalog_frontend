/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDeleteBookMutation } from "../redux/features/book/bookApi";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function MyModal({
  isOpen,

  openModal,
  closeModal,
  id,
}: any) {
  const [deleteBook, { isSuccess, data }] = useDeleteBookMutation();
  const navigate = useNavigate();

  const deletedBookHandler = () => {
    void deleteBook(id as string);
    toast.success("Delete Successfully");
    closeModal();
  };

  console.log(data);

  if (isSuccess) {
    toast.success("Delete Successfully");
    // navigate("/");
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900"
                  >
                    Are You Sure Delete this book?
                  </Dialog.Title>

                  <div className="mt-4 flex gap-5">
                    <button
                      onClick={() => closeModal()}
                      className=" bg-gray-600 text-white h-8 w-full rounded "
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deletedBookHandler()}
                      className=" bg-red-600 text-white h-8 w-full rounded "
                    >
                      Deleted
                    </button>
                    <ToastContainer />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
