import { Disclosure, Transition } from "@headlessui/react";

import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { HiChevronRight } from "react-icons/hi";

import cn from "clsx";

type AboutProps = {
  title: string;
  children?: React.ReactNode;
};

function About({ title, children }: AboutProps) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4 text-xl font-light">{children}</div>
    </>
  );
}

const faqs = [
  {
    id: 1,
    question: "How can I purchase?",
    answer:
      "We are an email to order service. Emails will be responded to in the order that they are received. We will do our best to provide a reply ASAP. Item(s) will be removed from our site as the item or size sells out. Please expect a delayed response during observed holidays. We are located in the Bay Area (PDT) and our response time may vary in different time zones.",
  },
  {
    id: 2,
    question: "What if there are several products that I want to purchase?",
    answer:
      "If there are several products that you're interested in, please let us know.",
  },
  {
    id: 3,
    question:
      "I understand that items come from multiple sellers. How can I be sure that what I'm receiving is authentic?",
    answer:
      "Every item is inspected by our experienced team for authenticity. All inventory is from trusted suppliers. Please purchase with complete confidence. We will provide additional pictures upon request. We want to make sure that you're seeing exactly what you'll be receiving.",
  },
  {
    id: 4,
    question: "Will my order be cancelled due to an item being out of stock?",
    answer:
      "We know how frustrating it can be to receive an email that your order has been cancelled due to an item being out of stock. Please rest assured that you will recieve your order. Our inventory will reflect what is currently available. We update our online store frequently as items sell out.",
  },
  {
    id: 5,
    question:
      "There's an item that I'm interested in. I was wondering if you accept offers?",
    answer:
      "There are several items on our online store where the seller will accept an offer. Please feel free to send an offer.",
  },
];

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="About Us at Shift Into Your Closet" />
        <meta name="keywords" content="about us, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 text-white min-h-screen"
        id="about-us"
      >
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-medium md:ml-2  cursor-pointer  hover:text-blue-400"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-lg font-medium md:ml-2">
                  About Us
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="sr-only mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          About Us
        </h1>
        <p className="mt-4 text-xl font-light">
          Shift Into Your Closet was founded in 2019. My vision is to be able to
          provide an accessible marketplace for everyone. Our inventory is
          supplied by trusted sellers. If you would like to become a seller on
          our platform, you can reach us at {""}
          <a
            className="underline text-lg italic hover:no-underline"
            href="mailto:shiftintoyourcloset@gmail.com?subject=Become%20a%20%20seller"
          >
            shiftintoyourcloset@gmail.com
          </a>
          .
        </p>
        <About title="An Accessible Marketplace">
          <p>
            We are always looking to grow and expand our selection. If an item
            isn't available on our online store, please let us know by using our{" "}
            <Link
              href="/wishlist"
              className="underline text-lg hover:no-underline "
            >
              wishlist
            </Link>
            . You'll receive early access before the item is available to the
            general public.
          </p>
        </About>
        <hr className="my-10" />
        <h4 className="text-4xl text-center">F.A.Q</h4>
        <p className="text-center text-xl mt-10">
          (Frequently Asked Questions)
        </p>
        <p className="mb-10 text-xl text-center">
          Questions or concerns? Please feel free to check out our FAQ below!
        </p>
        {faqs.map((faq, index) => (
          <div className="my-2.5" key={index}>
            <Disclosure as="div">
              {({ open }) => {
                return (
                  <>
                    <Disclosure.Button className="flex text-xl font-bold items-center">
                      <HiChevronRight
                        className={cn(
                          { ["rotate-90"]: open },
                          "w-5 h-5 mr-4 transition-all"
                        )}
                      />
                      <h3 className="text-left flex flex-1">{faq.question}</h3>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="mt-3 sm:mt-4 text-xl text-gray-200 font-light">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                );
              }}
            </Disclosure>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutUs;
