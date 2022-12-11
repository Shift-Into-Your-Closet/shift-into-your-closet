import s from "../../products/Product.module.css";
import ProductDetail from "../../products/ProductDetail";

import Breadcrumbs from "../../ui/Breadcrumbs";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import cn from "clsx";

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

import { ShoeQuery } from "../../../graphql-operations";

export type ShoeProps = {
  shoe: ShoeQuery["allShoe"][0] | undefined;
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

  const condition = shoe?.condition;
  const updatedShoeCondition = condition?.replace("-", " ");

  return (
    <>
      <Head>
        <title>{shoe?.name + " | " + siteTitle}</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta
          name="description"
          content={`${shoe?.name} Shift Into Your Closet`}
        />
        <meta name="keywords" content="shoes, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-40 lg:px-40 py-20 sm:py-28 lg:py-28 min-h-screen flex flex-col">
        <Breadcrumbs />
        <div className="my-10">
          <div className={cn(s.root, "fit")}>
            <div className={cn(s.main, "fit")}>
              <div className={s.sliderContainer}>
                {images.length > 0 && (
                  <Swiper
                    key={shoe?.slug?.current}
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
                    navigation={true}
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
                  {shoe?.name}
                </h1>
                <div className="text-2xl pl-3 font-bold text-blue-400">
                  ${shoe?.price}
                </div>
              </div>

              {shoe?.size?.shoeSize && shoe?.size?.shoeSize.length > 0 && (
                <div className="mb-6">
                  <h2 className="uppercase font-medium text-sm tracking-wide text-blue-400">
                    Size
                  </h2>
                  <div role="listbox" className="flex flex-row py-4">
                    <span className="rounded-3xl inline-flex bg-white p-2.5">
                      {shoe.size.shoeSize}
                    </span>
                  </div>
                  <div className="text-xl  text-blue-400 capitalize">
                    Condition: {updatedShoeCondition}
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
                <ProductDetail index={0} title="Authenticity Guaranteed">
                  Every item is guranteed to be 100% authentic. Our inventory
                  comes from trusted sellers. If you would like additional
                  pictures, please do not hesitate to ask!
                </ProductDetail>
                <ProductDetail index={1} title="Order Guaranteed">
                  We update our inventory as items sell out. Your item will be
                  on its way to you within 24 hours.
                </ProductDetail>
                <ProductDetail index={2} title="In Stock & Ready To Ship">
                  Orders ship within 24 hours excluding weekends and holdiays.
                </ProductDetail>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Shoe;
