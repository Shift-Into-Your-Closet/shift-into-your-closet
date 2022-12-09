import Image from "next/image";
import Link from "next/link";

import { FeaturedShoesQuery } from "../../graphql-operations";

interface FeaturedShoeCardProps {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
  price: number | null | undefined;
  href: string | null | undefined;
}

function FeaturedShoeCard({
  imageUrl,
  name,
  price,
  href,
}: FeaturedShoeCardProps) {
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

interface FeatureShoeProps {
  featuredShoes: FeaturedShoesQuery["allShoe"];
}

function FeaturedShoe({ featuredShoes }: FeatureShoeProps) {
  return (
    <>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-16  bg-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
          {featuredShoes?.map((shoe) => (
            <FeaturedShoeCard
              key={shoe.slug?.current}
              imageUrl={shoe.mainImage?.asset?.url ?? ""}
              name={shoe.name}
              price={shoe.price}
              href={shoe.slug?.current}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default FeaturedShoe;
