import cn from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { BiCheckShield } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";

type ProductDetailProps = {
  title: string;
  children: string;
  index: number;
};

function ProductDetail({ title, children, index }: ProductDetailProps) {
  return (
    <div className="animate-fade-in-up">
      <Disclosure as="div" className="rounded-md">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full ml-2 py-2 text-lg font-medium text-left text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              {index < 2 ? (
                <span className="text-white">
                  <BiCheckShield className="inline w-7 h-7 mr-2" />
                  {title}
                </span>
              ) : (
                <span className="text-white">
                  <CiDeliveryTruck className="inline w-7 h-7 mr-2" />
                  {title}
                </span>
              )}
              <HiPlus
                className={cn(
                  { ["rotate-45"]: open },
                  "w-7 h-7 mr-2 transition-all text-white"
                )}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-500 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-white">
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default ProductDetail;
