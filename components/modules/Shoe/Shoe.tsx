import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import cn from "clsx";
import s from "./Shoe.module.css";

import { BiCheckShield } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiChevronUp } from "react-icons/hi";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
  EffectCreative,
  Lazy,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { ShoeQuery } from "../../../graphql-operations";
import { Disclosure, Transition } from "@headlessui/react";

export type ShoeProps = {
  shoe: ShoeQuery["allShoe"][0] | undefined;
};

const siteTitle = "Shift Into Your Closet";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
  EffectCreative,
  Lazy,
  A11y,
]);

function Shoe({ shoe }: ShoeProps) {
  const images = useMemo(() => {
    const _images = [];
    if (shoe?.mainImage?.asset?.url) {
      _images.push(shoe?.mainImage?.asset?.url);
    }
    if (shoe?.image && shoe.image.length > 0) {
      _images.push(...shoe.image.map((image) => image?.asset?.url));
    }
    return _images;
  }, [shoe]);

  return (
    <>
      <Head>
        <title>{shoe?.name + " | " + siteTitle}</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta
          name="description"
          content={`${shoe?.name} Shift Into Your Closet`}
        />
        <meta name="keywords" content="shoes, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-40 lg:px-40 py-20 sm:py-28 lg:py-28 min-h-screen flex flex-col">
        <nav className="flex mb-10" aria-label="Breadcrumb">
          <ol className="inline-flex flex-wrap items-center gap-y-3 md:space-x-3 text-white">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-bold md:ml-2 hover:text-blue-400"
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
            <li>
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
                <Link
                  href="/shoes"
                  className="ml-1 text-lg font-regular md:ml-2 cursor-pointer hover:text-blue-400"
                >
                  Shoes
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <div>
          <div className={cn(s.root, "fit")}>
            <div className={cn(s.main, "fit")}>
              <div className={s.sliderContainer}>
                {images.length > 0 && (
                  <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    slidesPerView={1}
                    key={shoe?.slug?.current}
                    pagination={{ clickable: true }}
                    keyboard={{
                      enabled: true,
                      onlyInViewport: false,
                    }}
                    mousewheel={{
                      invert: true,
                    }}
                    lazy={true}
                  >
                    {images.map((image, index) => (
                      <div key={image} className={s.imageContainer}>
                        <SwiperSlide key={index}>
                          <Image
                            className="aspect-square"
                            src={image ?? ""}
                            alt={image || "Shoe Image"}
                            height={800}
                            width={800}
                            priority={index === 0}
                            quality="100"
                          />
                        </SwiperSlide>
                      </div>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
            <div className={s.sidebar}>
              <div className="flex mb-6">
                <h1 className="font-bold uppercase text-blue-400 text-2xl flex-1">
                  {shoe?.name}
                </h1>
                <div className="text-2xl pl-3 font-bold text-blue-400">
                  ${shoe?.price}
                </div>
              </div>

              {shoe?.size?.shoeSize && shoe?.size?.shoeSize.length > 0 && (
                <div className="mb-6">
                  <h2 className="uppercase font-medium text-sm tracking-wide text-blue-400">
                    Sizes
                  </h2>
                  <div role="listbox" className="flex flex-row py-4">
                    <span className="rounded-3xl inline-flex bg-white p-2.5">
                      {shoe.size.shoeSize}
                    </span>
                  </div>
                </div>
              )}

              <Link
                href="/shoe-inquiry"
                className="w-full px-4 py-2 bg-blue-500 rounded-lg text-center mb-5 text-white hover:bg-blue-700"
              >
                Inquire
              </Link>

              <div className="animate-fade-in-up">
                <Disclosure as="div" className="rounded-md">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full ml-2 py-2 text-lg font-medium text-left text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span className="text-white">
                          <BiCheckShield className="inline w-8 h-8 mr-2" />
                          Authenticity Guaranteed
                        </span>
                        <HiChevronUp
                          className={cn(
                            { ["rotate-180"]: open },
                            "w-5 h-5 mr-4 transition-all text-white"
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
                          Every item is guranteed to be 100% authentic. Our
                          inventory comes from trusted sellers.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="rounded-md">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full ml-2 py-2 text-lg font-medium text-left text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span className="text-white">
                          <BiCheckShield className="inline w-8 h-8 mr-2" />
                          Order Guaranteed
                        </span>
                        <HiChevronUp
                          className={cn(
                            { ["rotate-180"]: open },
                            "w-5 h-5 mr-4 transition-all text-white"
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
                          We do not cancel orders.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="rounded-md">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full ml-2 py-2 text-lg font-medium text-left text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span className="text-white">
                          <CiDeliveryTruck className="inline w-8 h-8 mr-2" />
                          In Stock & Ready To Ship
                        </span>
                        <HiChevronUp
                          className={cn(
                            { ["rotate-180"]: open },
                            "w-5 h-5 mr-4 transition-all text-white"
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
                          Orders ship within 24-48 hours excluding weekends and
                          holdiays.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Shoe;
