import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import client from "./../apollo-client";
import {
  AllWornAccessoriesDocument,
  AllWornAccessoriesQuery,
  AllWornApparelDocument,
  AllWornApparelQuery,
  AllWornShoesDocument,
  AllWornShoesQuery,
} from "./../graphql-operations";

type WornProps = {
  accessories: AllWornAccessoriesQuery["allAccessory"];
  apparels: AllWornApparelQuery["allApparel"];
  shoes: AllWornShoesQuery["allShoe"];
};

export const getStaticProps: GetStaticProps<WornProps> = async () => {
  const [
    { data: wornAccessoriesData },
    { data: wornApparelData },
    { data: wornShoesData },
  ] = await Promise.all([
    client.query<AllWornAccessoriesQuery>({
      query: AllWornAccessoriesDocument,
    }),
    client.query<AllWornApparelQuery>({
      query: AllWornApparelDocument,
    }),
    client.query<AllWornShoesQuery>({
      query: AllWornShoesDocument,
    }),
  ]);

  return {
    props: {
      accessories: wornAccessoriesData?.allAccessory ?? [],
      apparels: wornApparelData?.allApparel ?? [],
      shoes: wornShoesData?.allShoe ?? [],
    },
    revalidate: 200,
  };
};

const Worn: NextPage<WornProps> = ({
  accessories,
  apparels,
  shoes,
}: WornProps) => {
  const allWornItems = [...accessories, ...apparels, ...shoes];

  return (
    <>
      <Head>
        <title>Worn | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta
          name="description"
          content="Worn items at Shift Into Your Closet"
        />
        <meta name="keywords" content="worn items, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        id="worn"
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2"></div>
          <div className="col-span-12 lg:col-span-10">
            {allWornItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
                {allWornItems.map((allWornItem) => {
                  const typeName = allWornItem.__typename;
                  const updatedTypeName = typeName?.toLowerCase();
                  return (
                    <Link
                      key={allWornItem.slug?.current}
                      href={`/${updatedTypeName}/${allWornItem.slug?.current}`}
                    >
                      <div className="relative cursor-pointer overflow-hidden rounded-sm">
                        <div className="h-72 relative">
                          {allWornItem.mainImage?.asset?.url && (
                            <Image
                              src={allWornItem.mainImage.asset.url}
                              alt={`Image for ${allWornItem.name}`}
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
                              {allWornItem.name}
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="bg-black py-1 px-5">
                            <div className="text-xl text-blue-400 font-bold">
                              ${allWornItem.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-sm">No worn items found.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Worn;
