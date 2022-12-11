import Image from "next/image";
import Link from "next/link";

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
  const updatedTypeName = typeName?.toLowerCase();

  return (
    <>
      <Link key={href} href={`/${updatedTypeName}/${href}`}>
        <div className="relative overflow-hidden rounded-sm">
          <div className="h-72 relative">
            <Image
              src={imageUrl ?? ""}
              alt={`Image for ${name}`}
              className="object-cover"
              placeholder={"blur"}
              blurDataURL={imageUrl ?? ""}
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
}

function StaffPicks({
  featuredShoes,
  featuredApparels,
  featuredAccessories,
}: StaffPicksProps) {
  const staffPicks = [
    ...featuredShoes,
    ...featuredApparels,
    ...featuredAccessories,
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-16 ">
        <h2 className="text-3xl text-center tracking-widest mb-10 uppercase text-gray-400 font-bold ">
          Staff Picks 🔥
        </h2>
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
      </section>
    </>
  );
}

export default StaffPicks;
