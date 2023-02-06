import { useMemo, useState } from "react";
import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import cn from "clsx";
import client from "./../apollo-client";
import {
  AllAccessoryBrandsDocument,
  AllAccessoryBrandsQuery,
  AllAccessoryDocument,
  AllAccessoryQuery,
} from "./../graphql-operations";

import { Combobox } from "@headlessui/react";

type ApparelProps = {
  accessories: AllAccessoryQuery["allAccessory"];
  brands: AllAccessoryBrandsQuery["allAccessoryBrand"];
};

export const getStaticProps: GetStaticProps<ApparelProps> = async (context) => {
  const { params = {} } = context;
  const page = Number(params.page) || 1;
  const perPage = Number(params.perPage) || 9;
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const [{ data: accessoriesData }, { data: accessoriesBrandData }] =
    await Promise.all([
      client.query<AllAccessoryQuery>({
        query: AllAccessoryDocument,
        variables: {
          offset,
          limit,
        },
      }),
      client.query<AllAccessoryBrandsQuery>({
        query: AllAccessoryBrandsDocument,
      }),
    ]);

  const copy = [...(accessoriesData?.allAccessory ?? [])];
  return {
    props: {
      accessories: copy.sort((a, b) =>
        (a.category?.name || "").localeCompare(b.category?.name || "")
      ),
      brands: accessoriesBrandData?.allAccessoryBrand ?? [],
    },
    revalidate: 200,
  };
};

const Accessories: NextPage<ApparelProps> = ({
  accessories,
  brands,
}: ApparelProps) => {
  const [selectedAccessory, setSelectedAccessory] = useState("");
  const [query, setQuery] = useState("");

  const router = useRouter();
  const activeBrand = router.query.brand || "";
  const page = Number(router.query.page) || 1;
  const perPage = Number(router.query.perPage) || 9;
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const autocompleteAccessories =
    query === ""
      ? accessories
      : accessories.filter((accessory) => {
          return accessory.name?.toLowerCase().includes(query.toLowerCase());
        });

  const filteredAccessories = useMemo(() => {
    const brandAccessories = activeBrand
      ? autocompleteAccessories.filter((accessory) =>
          accessory.brand?.some((brand) => brand?.slug?.current === activeBrand)
        )
      : autocompleteAccessories;
    return brandAccessories.slice(offset, offset + limit);
  }, [activeBrand, autocompleteAccessories, offset, limit]);

  const brandAccessories = activeBrand
    ? accessories.filter((accessory) =>
        accessory.brand?.some((brand) => brand?.slug?.current === activeBrand)
      )
    : accessories;

  const brandPages = Math.ceil(brandAccessories.length / perPage);

  const prevPage = page - 1;
  const nextPage = page + 1;

  const prevLink =
    prevPage > 0
      ? `/accessories?page=${prevPage}&perPage=${perPage}${
          activeBrand ? `&category=${activeBrand}` : ""
        }`
      : null;

  const nextLink =
    nextPage <= brandPages
      ? `/accessories?page=${nextPage}&perPage=${perPage}${
          activeBrand ? `&category=${activeBrand}` : ""
        }`
      : null;

  return (
    <>
      <Head>
        <title>Accessories | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta
          name="description"
          content="Accessories at Shift Into Your Closet"
        />
        <meta name="keywords" content="accessories, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        id="accessories"
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <Combobox
          as="div"
          value={selectedAccessory}
          onChange={setSelectedAccessory}
          className="w-full"
          aria-label="Search Accessories"
        >
          <Combobox.Input
            placeholder="Search Accessories"
            className="w-full border border-accent-4 rounded-sm p-2 text-black bg-gray-200"
            onChange={(event) => setQuery(event.target.value)}
          />
          {filteredAccessories.length > 0 && (
            <Combobox.Options>
              {autocompleteAccessories.map((accessory) => (
                <Combobox.Option key={accessory.name} value={accessory.name} />
              ))}
            </Combobox.Options>
          )}
        </Combobox>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2">
            <Link href="/accessories">
              <button className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
                All Brands
              </button>
            </Link>
            {brands?.map((brand) => (
              <Link
                key={brand.slug?.current}
                href={`/accessories?brand=${brand?.slug?.current}`}
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
            {filteredAccessories.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
                {filteredAccessories.map((accessory) => {
                  return (
                    <Link
                      key={accessory.slug?.current}
                      href={`/accessory/${accessory.slug?.current}`}
                    >
                      <div className="relative cursor-pointer overflow-hidden rounded-sm">
                        <div className="h-72 relative">
                          {accessory.mainImage?.asset?.url && (
                            <Image
                              src={accessory.mainImage.asset.url}
                              alt={`Image for ${accessory.name}`}
                              className="object-cover"
                              priority={true}
                              fill
                              sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            />
                          )}
                        </div>
                        <div className="absolute bottom-0 left-0">
                          <div className="bg-black py-3 px-5">
                            <div className="text-white uppercase font-title font-bold pb-1">
                              {accessory.name}
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="bg-black py-1 px-5">
                            <div className="text-xl text-blue-400 font-bold">
                              ${accessory.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-sm text-white">
                No accessories found. Please check back as we get in new items
                weekly.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accessories;
