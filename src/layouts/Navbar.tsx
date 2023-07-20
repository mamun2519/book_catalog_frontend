import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook/hook";
import { singOut } from "../redux/features/auth/authSlice";

import { AiFillRead } from "react-icons/ai";

const Navbar = () => {
  // const [searchText, setSearchText] = useState("");
  // const { data, error, isLoading } = useGetALLBookQuery(searchText, {
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 30000,
  // });
  const navigation = [
    { name: "Home", to: "/", current: true },
    { name: "Add Book", to: "/addBook", current: false },
    { name: "All Book", to: "/allBook", current: false },
  ];
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const { user } = useAppSelector((state) => state.auth);
  const disPatch = useAppDispatch();
  // const { data, isLoading, isSuccess } = useGetALLWishListQuery(
  //   user as string,
  //   {
  //     refetchOnMountOrArgChange: true,
  //     pollingInterval: 30000,
  //   }
  // );

  return (
    <div className="h-32 bg-gray-800 ">
      <div className="m-auto max-w-7xl">
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="lg:flex px-12 lg:px-0  flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="">
                      <img
                        className="h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Menu>
                      {user ? (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => disPatch(singOut())}
                              className={classNames(
                                active
                                  ? "bg-gray-700 rounded-md  cursor-pointer"
                                  : "",
                                "block px-4 py-2 text-sm text-white"
                              )}
                            >
                              SingOut
                            </button>
                          )}
                        </Menu.Item>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/singIn"
                              className={classNames(
                                active ? "bg-gray-700 rounded-md" : "",
                                "block px-4 py-2 text-sm text-white"
                              )}
                            >
                              Sign In
                            </Link>
                          )}
                        </Menu.Item>
                      )}
                    </Menu>
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>

                      <div className="  relative h-8  flex gap-5">
                        <Link
                          to="/readList"
                          className="h-6 w-6 group-hover:opacity-70  mt-"
                        >
                          <span className=" text-3xl">
                            <AiFillRead />
                          </span>
                        </Link>
                        <Link
                          to="/wishList"
                          // onClick={() => addWishlistHandler()}
                          className="flex flex-col-reverse  group cursor-pointer"
                          data-tip="Wishlist"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 group-hover:opacity-70"
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
                        </Link>
                      </div>
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.to}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div>
          <input
            id="email"
            type="text"
            className="text-sm h-10 sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
            placeholder="Search Book"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
