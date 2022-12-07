import cn from "clsx";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import client from "./../apollo-client";
import {
  AllShoeBrandsDocument,
  AllShoeBrandsQuery,
  AllShoesDocument,
  AllShoesQuery,
} from "./../graphql-operations";

type ShoeProps = {
  shoes: AllShoesQuery["allShoe"];
  brands: AllShoeBrandsQuery["allShoeBrand"];
};

export const getStaticProps: GetStaticProps<ShoeProps> = async () => {
  const [{ data: shoeData }, { data: shoeBrandData }] = await Promise.all([
    client.query<AllShoesQuery>({
      query: AllShoesDocument,
    }),
    client.query<AllShoeBrandsQuery>({
      query: AllShoeBrandsDocument,
    }),
  ]);

  const copy = [...(shoeData?.allShoe ?? [])];
  return {
    props: {
      shoes: copy.sort((a, b) => (a.name || "").localeCompare(b.name || "")),
      brands: shoeBrandData?.allShoeBrand ?? [],
    },
    revalidate: 200,
  };
};

const Shoes: NextPage<ShoeProps> = ({ shoes, brands }: ShoeProps) => {
  const router = useRouter();
  const { brand: activeBrand } = router.query;
  const filteredShoes = useMemo(() => {
    return activeBrand
      ? shoes.filter((shoe) =>
          shoe.brand?.some((brand) => brand?.slug?.current === activeBrand)
        )
      : shoes;
  }, [activeBrand, shoes]);

  return (
    <>
      <Head>
        <title>Shoes | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="shoes at Shift Into Your Closet" />
        <meta name="keywords" content="shoes, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        id="shoes"
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2">
            <Link href="/shoes">
              <button className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
                All Brands
              </button>
            </Link>
            {brands?.map((brand) => (
              <Link
                key={brand.slug?.current}
                href={`/shoes?brand=${brand?.slug?.current}`}
              >
                <button
                  className={cn(
                    "block text-sm leading-5 text-white hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8  mb-2",
                    { underline: activeBrand === brand.slug?.current }
                  )}
                >
                  {brand.name}
                </button>
              </Link>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-10">
            {filteredShoes.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
                {filteredShoes.map((shoe) => {
                  return (
                    <Link
                      key={shoe.slug?.current}
                      href={`/shoe/${shoe.slug?.current}`}
                    >
                      <div className="relative cursor-pointer overflow-hidden rounded-sm">
                        <div className="h-72 relative">
                          {shoe.mainImage?.asset?.url && (
                            <Image
                              src={shoe.mainImage.asset.url}
                              alt={`Image for ${shoe.name}`}
                              className="object-cover"
                              fill
                              sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                            />
                          )}
                        </div>
                        <div className="absolute bottom-0 left-0">
                          <div className="bg-black py-3 px-5">
                            <div className="text-white uppercase font-bold pb-1">
                              {shoe.name}
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="bg-black py-1 px-5">
                            <div className="text-xl text-blue-400 font-bold">
                              ${shoe.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-sm">No shoes found.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shoes;
