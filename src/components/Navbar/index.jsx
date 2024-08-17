import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { LuMenu } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export const NavBar = () => {
  //STATES
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const activeStyle = "underline underline-offset-4";

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="md:w-full md:fixed md:top-0 md:z-10 md:border-2 border-black">
      <div
        id="mobile-menu"
        className="bg-gray-100 w-full h-14 fixed bottom-0 md:hidden"
      >
        <div className="flex justify-around mt-4 text-2xl">
          <span
            className="text-sm flex flex-col items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <LuMenu />
            <p>Menu</p>
          </span>
          <span className="text-sm flex flex-col items-center cursor-pointer">
            <AiOutlineHome />
            <p>Home</p>
          </span>
          <span className="text-sm flex flex-col items-center cursor-pointer">
            <FaRegUser />
            <p>Account</p>
          </span>
          <span className="text-sm flex flex-col items-center cursor-pointer">
            <IoCartOutline />
            <p>Cart</p>
          </span>
        </div>
      </div>
      <div
        className={`${
          isMenuVisible ? "block" : "hidden"
        } mx-4 md:w-full md:flex md:justify-between md:mx-0 md:px-1`}
      >
        <ul className="border-b-2 py-4 md:flex md:w-80 md:border-b-0">
          <div className="shopi md:mr-2">
            <li className="font-extrabold hidden md:block">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Shopi
              </NavLink>
            </li>
          </div>
          <div
            id="store-options"
            className="md:flex md:justify-between md:w-72"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clothes"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/electronics"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toys"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/others"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Others
              </NavLink>
            </li>
          </div>
        </ul>
        <ul className="py-4 md:flex md:justify-between w-80">
          <li className="hidden">zapateria123@zapatos.com</li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-order"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In{" "}
            </NavLink>
          </li>
          <span className="items-center text-center flex">
            <IoCartOutline />
          </span>
        </ul>
      </div>
    </nav>
  );
};
