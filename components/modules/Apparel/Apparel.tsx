import ItemDetail from "../../../components/products/ItemDetail";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import cn from "clsx";
import s from "./Apparel.module.css";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  EffectCreative,
  Lazy,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { ApparelQuery } from "../../../graphql-operations";

export type ApparelProps = {
  apparel: ApparelQuery["allApparel"][0] | undefined;
};

const siteTitle = "Shift Into Your Closet";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  EffectCreative,
  Lazy,
  A11y,
]);

function Apparel({ apparel }: ApparelProps) {
  const images = useMemo(() => {
    const _images = [];
    if (apparel?.mainImage?.asset?.url) {
      _images.push(apparel?.mainImage?.asset?.url);
    }
    if (apparel?.image && apparel.image.length > 0) {
      _images.push(...apparel.image.map((image) => image?.asset?.url));
    }
    return _images;
  }, [apparel]);

  const condition = apparel?.condition;
  const updatedApparelCondition = condition?.replace("-", " ");

  return (
    <>
      <Head>
        <title>{apparel?.name + " | " + siteTitle}</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta
          name="description"
          content={`${apparel?.name} Shift Into Your Closet`}
        />
        <meta name="keywords" content="apparel, shift into your closet" />
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
                  href="/apparel"
                  className="ml-1 text-lg font-regular md:ml-2 cursor-pointer hover:text-blue-400"
                >
                  Apparel
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
                    key={apparel?.slug?.current}
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
                    pagination={{ clickable: true }}
                    keyboard={{
                      enabled: true,
                      onlyInViewport: false,
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
                <h1 className="font-bold text-blue-400 text-2xl flex-1">
                  {apparel?.name}
                </h1>
                <div className="text-2xl pl-3 font-bold text-blue-400">
                  ${apparel?.price}
                </div>
              </div>

              {apparel?.size?.apparelSize &&
                apparel?.size?.apparelSize.length > 0 && (
                  <div className="mb-6">
                    <h2 className="uppercase font-medium text-sm tracking-wide text-blue-400">
                      Size
                    </h2>
                    <div role="listbox" className="flex flex-row py-4">
                      <span className="rounded-3xl inline-flex bg-white p-2.5">
                        {apparel.size.apparelSize}
                      </span>
                    </div>
                    <div className="text-xl  text-blue-400 capitalize">
                      Condition: {updatedApparelCondition}
                    </div>
                  </div>
                )}

              <Link
                href="/apparel-inquiry"
                className="w-full px-4 py-2 bg-blue-500 rounded-lg text-center mb-5 text-white hover:bg-blue-700"
              >
                Inquire
              </Link>
              <div className="animate-fade-in-up">
                <ItemDetail index={0} title="Authenticity Guaranteed">
                  Every item is guranteed to be 100% authentic. Our inventory
                  comes from trusted sellers. If you would like additional
                  pictures, please do not hesitate to ask!
                </ItemDetail>
                <ItemDetail index={1} title="Order Guaranteed">
                  We update our inventory as items sell out. Your item will be
                  on its way to you within 24 hours.
                </ItemDetail>
                <ItemDetail index={2} title="In Stock & Ready To Ship">
                  Orders ship within 24 hours excluding weekends and holdiays.
                </ItemDetail>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Apparel;
