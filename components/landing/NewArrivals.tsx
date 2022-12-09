import Image from "next/image";
import Link from "next/link";

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

interface NewArrivalsProps {
  newestApparels: NewestApparelsQuery["allApparel"];
  newestShoes: NewestShoesQuery["allShoe"];
}

function NewArrivals({ newestApparels, newestShoes }: NewArrivalsProps) {
  const allNewArrivals = [...newestApparels, ...newestShoes];

  return (
    <>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24  bg-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
          {allNewArrivals?.map((allNewArrival) => (
            <NewArrivalCard
              imageUrl={allNewArrival.mainImage?.asset?.url ?? ""}
              name={allNewArrival.name}
              price={allNewArrival.price}
              href={allNewArrival.slug?.current}
              typeName={allNewArrival.__typename}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default NewArrivals;
