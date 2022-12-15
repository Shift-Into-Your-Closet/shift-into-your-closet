import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "clsx";

import {
  FeaturedAccessoriesQuery,
  FeaturedApparelsQuery,
  FeaturedShoesQuery,
} from "../../graphql-operations";

interface StaffPicksCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  price: number | null | undefined;
  href: string | null | undefined;
  typeName: string | null | undefined;
}

function StaffPicksCard({
  imageUrl,
  name,
  price,

  href,
  typeName,
}: StaffPicksCardProps) {
  const uppercaseTypeName = typeName?.toLowerCase();

  return (
    <>
      <Link
        key={href}
        as={`/${uppercaseTypeName}/${href}`}
        href={`/${uppercaseTypeName}/${href}`}
      >
        <div className="relative overflow-hidden rounded-sm">
          <div className="h-80 relative">
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

interface StaffPicksProps {
  featuredShoes: FeaturedShoesQuery["allShoe"];
  featuredApparels: FeaturedApparelsQuery["allApparel"];
  featuredAccessories: FeaturedAccessoriesQuery["allAccessory"];
  hasShowMore?: boolean;
}

function OurServices({
  hasShowMore = false,
  featuredShoes,
  featuredApparels,
  featuredAccessories,
}: StaffPicksProps) {
  const staffPicks = [
    ...featuredShoes,
    ...featuredApparels,
    ...featuredAccessories,
  ];

  const [showMore, setShowMore] = useState(!hasShowMore);
  return (
    <div className="relative max-w-5xl mx-auto my-28">
      <div className="flex pb-12 flex-col items-center justify-center">
        <h2 className="text-3xl text-center tracking-widest mt-6 uppercase text-gray-400 font-bold ">
          Staff Picks
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-md sm:text-xl font-roboto sm:mt-4 text-center text-xl text-gray-200 font-light">
          Check out some must haves!
        </p>
      </div>
      <div
        className={cn({
          ["max-h-[44.5rem]"]: !showMore,
          ["overflow-hidden"]: !showMore,
        })}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
          {staffPicks?.map((staffPick) => (
            <StaffPicksCard
              key={staffPick.slug?.current}
              imageUrl={staffPick.mainImage?.asset?.url ?? ""}
              name={staffPick.name}
              price={staffPick.price}
              href={staffPick.slug?.current}
              typeName={staffPick.__typename}
            />
          ))}
        </div>
        {hasShowMore && (
          <div
            className={cn("inset-x-0 flex justify-center absolute", {
              ["pt-32"]: !showMore,
              ["bg-gradient-to-t bottom-0 pb-0 pointer-events-none from-black"]:
                !showMore,
            })}
          >
            {!showMore && (
              <button
                type="button"
                onClick={() => {
                  setShowMore(!showMore);
                }}
                className="relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center bg-zinc-700 hover:bg-zinc-500 pointer-events-auto"
              >
                Show More...
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default OurServices;
