import Image from "next/image";
import Link from "next/link";

import { NewestShoesQuery } from "../../graphql-operations";

interface NewShoeArrivalCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  price: number | null | undefined;
  href: string | null | undefined;
}

function NewShoeArrivalCard({
  imageUrl,
  name,
  price,
  href,
}: NewShoeArrivalCardProps) {
  return (
    <>
      <Link key={href} href={`/shoe/${href}`}>
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

interface NewShoeArrivalsProps {
  newestShoes: NewestShoesQuery["allShoe"];
}

function NewShoeArrivals({ newestShoes }: NewShoeArrivalsProps) {
  return (
    <>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 bg-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
          {newestShoes?.map((newestShoe) => (
            <NewShoeArrivalCard
              key={newestShoe.slug?.current}
              imageUrl={newestShoe.mainImage?.asset?.url ?? ""}
              name={newestShoe.name}
              price={newestShoe.price}
              href={newestShoe.slug?.current}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default NewShoeArrivals;
