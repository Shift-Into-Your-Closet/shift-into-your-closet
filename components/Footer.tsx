import React from "react";
import Link from "next/link";

const shopLinks = [
  {
    name: "Shoes",
    link: "/shoes",
  },
  {
    name: "Apparel",
    link: "/apparel",
  },
  {
    name: "Accessories",
    link: "/accessories",
  },
];

const customerServiceLinks = [
  {
    name: "About Us",
    link: "about-us",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Shipping & Return Policy",
    link: "shipping-returns",
  },
  {
    name: "Wishlist",
    link: "/wishlist",
  },
  {
    name: "Sell With Us",
    link: "/sell-with-us",
  },
];

function Footer() {
  return (
    <footer className="bg-zinc-900 bottom-0 p-10">
      <div className="flex-none lg:flex">
        <div className="flex flex-col flex-1 pb-4">
          <div className="pb-3 text-lg tracking-tight text-slate-200">
            Welcome! We're glad you're choosing to shop with us.
          </div>
        </div>
        <div className="flex-none w-1/2 space-y-4 md:space-y-0 md:flex">
          <div className="md:flex-none md:w-1/2 text-left lg:text-right">
            <div className="text-slate-200 text-sm pb-2">Shop</div>
            {shopLinks.map(({ name, link }) => {
              return (
                <div
                  key={name}
                  className="text-gray-400 text-sm pb-2 hover:text-slate-200 transition ease-in-out"
                >
                  <Link href={link}>{name}</Link>
                </div>
              );
            })}
          </div>
          <div className="md:flex-none md:w-1/2 text-left lg:text-right">
            <div className="text-slate-200 text-sm pb-2">Customer Service</div>
            {customerServiceLinks.map(({ name, link }) => {
              return (
                <div
                  key={name}
                  className="text-gray-400 text-sm pb-2 hover:text-slate-200 transition ease-in-out"
                >
                  <Link href={link}>{name}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-slate-200 text-xs pt-8">
        © {new Date().getFullYear()} | Shift Into Your Closet | All Rights
        Reserved
      </div>
    </footer>
  );
}

export default Footer;
