import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { onHandleSignOut } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const headerNav1 = [
  {
    display: "Login",
    path: "/login",
  },
  {
    display: "Register",
    path: "/register",
  },
];

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Series",
    path: "/series",
  },
  {
    display: "Movie",
    path: "/movie",
  },
  {
    display: "New and Poupular",
    path: "/new-and-poupular",
  },
  {
    display: "My List",
    path: "/my-list",
  },
];

const Navbar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const clickHandler = () => {
    // setisLoggedOut(false);
  };
  const logoutHandler = async () => {
    await onHandleSignOut();
    navigate("/login");
  };

  return (
    <>
      <div className="h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="w-full mx-auto lg:px-8 sm:px-6 px-4 py-4">
                <div className="flex items-center text-white justify-between">
                  {/* Brand */}
                  <div className="flex mx-5">
                    <NavLink to="/">
                      <img src={logo} alt="logo" className="w-[30px]" />
                    </NavLink>
                  </div>

                  {/* Navigation */}
                  {!user ? (
                    <div className="sm:block hidden">
                      <div className="flex items-center space-x-10">
                        {headerNav1.map((nav) => (
                          <NavLink
                            key={nav.display}
                            to={nav.path}
                            onClick={clickHandler}
                          >
                            {nav.display}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="sm:block hidden">
                        <div className="flex items-center space-x-10">
                          {headerNav.map((nav) => (
                            <NavLink key={nav.display} to={nav.path}>
                              {nav.display}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* Search */}
                        <NavLink to="/" className="hidden sm:flex items-center">
                          <SearchIcon className="w-5 h-5 ml-1 text-gray-500" />
                        </NavLink>

                        {/* Notif */}
                        <NavLink to="/" className="hidden sm:flex items-center">
                          <Badge badgeContent={1} color="primary">
                            <NotificationsIcon className="text-gray-500" />
                          </Badge>
                        </NavLink>

                        <Menu
                          as="div"
                          className="sm:block hidden mx-3.5 relative z-10"
                        >
                          <Menu.Button className="bg-[#141414] flex rounded-full focus:outline-none ">
                            <div className="w-8 h-8">
                              <img
                                className="w-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="profile"
                              />
                            </div>
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute -right-1.5 w-56 mt-3.5 py-3.5 origin-top-right bg-[#141414] divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <NavLink
                                to="/"
                                className="block text-lg font-semibold text-center mb-3.5 "
                              >
                                {user.email}
                              </NavLink>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={logoutHandler}
                                    className={`${
                                      active
                                        ? "bg-transparent text-white"
                                        : "text-white"
                                    } flex pl-10 items-center w-full py-2`}
                                  >
                                    <LogoutIcon className="mr-3.5" />
                                    Logout
                                  </button>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </>
                  )}
                  {/* Mobile Navigation */}
                  <div className="sm:hidden block ">
                    <Disclosure.Button className="p-2 ">
                      {open ? (
                        <ExpandMoreOutlinedIcon
                          fontSize="large"
                          className="border-2 border-gray-300 rounded-full hover:bg-gray-200"
                        />
                      ) : (
                        <ExpandMoreOutlinedIcon
                          fontSize="large"
                          className="border-2 border-gray-300 rounded-full hover:bg-gray-200"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <Disclosure.Panel className="sm:hidden block bg-[#141414] text-white">
                {!user ? (
                  <div className="pb-5 mt-2 px-2 shadow-md text-white">
                    {headerNav1.map((nav) => (
                      <Disclosure.Button
                        key={nav.name}
                        as={NavLink}
                        to={nav.path}
                        onClick={clickHandler}
                        className="block px-3 py-2 font-medium text-center  hover:text-white"
                      >
                        {nav.display}
                      </Disclosure.Button>
                    ))}
                  </div>
                ) : (
                  <div className="pb-5 mt-2 px-2 shadow-md divide-y divide-gray-200">
                    <div className="">
                      <div className="my-5 px-6 flex items-center justify-center">
                        <div className="w-10 h-10 flex items-center">
                          <img
                            className="w-full rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="profile"
                          />
                        </div>
                        <div className="flex flex-col ml-3.5">
                          <p className="font-semibold text-lg">{user.email}</p>
                          <small>{}</small>
                        </div>
                      </div>
                      {headerNav.map((nav) => (
                        <Disclosure.Button
                          key={nav}
                          as={NavLink}
                          to={nav.path}
                          className="block px-3 py-2 font-medium text-center hover:text-white"
                        >
                          {nav.display}
                        </Disclosure.Button>
                      ))}
                    </div>
                    <NavLink
                      to="/search"
                      className="w-full block px-3 py-2 font-medium text-center hover:text-white border-none"
                    >
                      Search
                    </NavLink>
                    <button
                      onClick={logoutHandler}
                      className="w-full block px-3 py-2 font-medium text-center hover:text-white border-none"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Navbar;
