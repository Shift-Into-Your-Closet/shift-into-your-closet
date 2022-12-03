import Link from "next/link";
import { useRouter } from "next/router";

import { Disclosure } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import cn from "clsx";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Shoes", href: "/shoes", current: false },
  { name: "Apparel", href: "/apparel", current: false },
  { name: "Accessories", href: "/accessories", current: false },
  { name: "Wishlist", href: "/wishlist", current: false },
  { name: "Sell With Us", href: "/sell-with-us", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function Navbar() {
  const router = useRouter();
  return (
    <Disclosure
      as="nav"
      className="border-b bg-zinc-900 border-zinc-500 sticky top-0 w-full backdrop-blur-3xl backdrop-brightness-50 z-10"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-14">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:mx-auto">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div
                          className={cn(
                            item.current
                              ? "text-white"
                              : "text-gray-400  hover:text-white transition ease-in-out",
                            "px-3 py-2 rounded-md text-sm cursor-pointer",
                            { underline: router.pathname === item.href }
                          )}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
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
  );
}

export default Navbar;
