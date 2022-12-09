import Image from "next/image";

import {
  NewestAccessoriesQuery,
  NewestApparelsQuery,
  NewestShoesQuery,
} from "../../graphql-operations";

interface NewArrivalCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  price: number | null | undefined;
}

function NewArrivalCard({ imageUrl, name, price }: NewArrivalCardProps) {
  return (
    <>
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
    </>
  );
}

interface NewArrivalsProps {
  newestAccessories: NewestAccessoriesQuery["allAccessories"];
  newestApparels: NewestApparelsQuery["allApparel"];
  newestShoes: NewestShoesQuery["allShoe"];
}

function NewArrivals({
  newestAccessories,
  newestApparels,
  newestShoes,
}: NewArrivalsProps) {
  const allNewArrivals = [
    ...newestAccessories,
    ...newestApparels,
    ...newestShoes,
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-16 bg-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
          {allNewArrivals?.map((allNewArrival) => (
            <NewArrivalCard
              key={allNewArrival.slug?.current}
              imageUrl={allNewArrival.mainImage?.asset?.url ?? ""}
              name={allNewArrival.name}
              price={allNewArrival.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default NewArrivals;
