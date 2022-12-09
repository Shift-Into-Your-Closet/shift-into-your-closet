import Image from "next/image";
import Link from "next/link";

import SwiperCore, {
  Autoplay,
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

import {
  NewestApparelsQuery,
  NewestShoesQuery,
} from "../../graphql-operations";

interface NewArrivalCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  price: number | null | undefined;
  href: string | null | undefined;
  typeName: string | null | undefined;
}

SwiperCore.use([
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  EffectCreative,
  Lazy,
  A11y,
]);

function NewArrivalCard({
  imageUrl,
  name,
  price,
  href,
  typeName,
}: NewArrivalCardProps) {
  const updatedTypeName = typeName?.toLowerCase();
  return (
    <>
      <Link key={href} href={`/${updatedTypeName}/${href}`}>
        <div className="relative overflow-hidden rounded-sm">
          <div className="h-96 relative">
            <Image
              src={imageUrl ?? ""}
              alt={`Image for ${name}`}
              className="object-cover"
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
            />
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="bg-black py-3 px-5">
              <div className="text-white uppercase font-bold pb-1">{name}</div>
            </div>
          </div>
          <div className="absolute top-0 left-0">
            <div className="bg-black py-1 px-5">
              <div className="text-xl text-blue-400 font-bold">${price}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

interface NewArrivalsProps {
  newestApparels: NewestApparelsQuery["allApparel"];
  newestShoes: NewestShoesQuery["allShoe"];
}

function NewArrivals({ newestApparels, newestShoes }: NewArrivalsProps) {
  const allNewArrivals = [...newestApparels, ...newestShoes];

  return (
    <>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24  bg-zinc-800">
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          navigation={true}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          lazy={true}
        >
          {allNewArrivals?.map((allNewArrival) => (
            <SwiperSlide key={allNewArrival.slug?.current}>
              <NewArrivalCard
                imageUrl={allNewArrival.mainImage?.asset?.url ?? ""}
                name={allNewArrival.name}
                price={allNewArrival.price}
                href={allNewArrival.slug?.current}
                typeName={allNewArrival.__typename}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default NewArrivals;
