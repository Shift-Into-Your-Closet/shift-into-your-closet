import Link from "next/link";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

function ShopNow() {
  return (
    <div className="w-10/12 mx-auto p-4 mt-10 text-center bg-white border rounded-xl shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <span className=" text-3xl font-bold text-gray-900 dark:text-white">
        New Drops Every Week
      </span>
      <div className="my-5 items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Link
          href="/all"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <HiOutlineShoppingCart className="mr-2" />
          <div className="text-left p-1">
            <div className="font-sans text-sm font-semibold">Shop Now</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShopNow;
