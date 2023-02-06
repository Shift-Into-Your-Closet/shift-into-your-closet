import { useMemo, useState } from "react";
import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import cn from "clsx";
import client from "./../apollo-client";
import {
  AllApparelBrandsDocument,
  AllApparelBrandsQuery,
  AllApparelsDocument,
  AllApparelsQuery,
} from "./../graphql-operations";

import { Combobox } from "@headlessui/react";

type ApparelProps = {
  apparels: AllApparelsQuery["allApparel"];
  brands: AllApparelBrandsQuery["allApparelBrand"];
};

export const getStaticProps: GetStaticProps<ApparelProps> = async (context) => {
  const { params = {} } = context;
  const page = Number(params.page) || 1;
  const perPage = Number(params.perPage) || 9;
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const [{ data: apparelData }, { data: apparelBrandData }] = await Promise.all(
    [
      client.query<AllApparelsQuery>({
        query: AllApparelsDocument,
        variables: {
          offset,
          limit,
        },
      }),
      client.query<AllApparelBrandsQuery>({
        query: AllApparelBrandsDocument,
      }),
    ]
  );

  const copy = [...(apparelData?.allApparel ?? [])];
  return {
    props: {
      apparels: copy.sort((a, b) =>
        (a.category?.name || "").localeCompare(b.category?.name || "")
      ),
      brands: apparelBrandData?.allApparelBrand ?? [],
    },
    revalidate: 200,
  };
};

const Apparel: NextPage<ApparelProps> = ({
  apparels,
  brands,
}: ApparelProps) => {
  const [selectedApparel, setSelectedApparel] = useState("");
  const [query, setQuery] = useState("");

  const router = useRouter();
  const activeBrand = router.query.brand || "";
  const page = Number(router.query.page) || 1;
  const perPage = Number(router.query.perPage) || 9;
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const autocompleteApparel =
    query === ""
      ? apparels
      : apparels.filter((apparel) => {
          return apparel.name?.toLowerCase().includes(query.toLowerCase());
        });

  const filteredApparel = useMemo(() => {
    const brandApparel = activeBrand
      ? autocompleteApparel.filter((apparel) =>
          apparel.brand?.some((brand) => brand?.slug?.current === activeBrand)
        )
      : autocompleteApparel;
    return brandApparel.slice(offset, offset + limit);
  }, [activeBrand, autocompleteApparel, offset, limit]);

  const brandApparel = activeBrand
    ? apparels.filter((apparel) =>
        apparel.brand?.some((brand) => brand?.slug?.current === activeBrand)
      )
    : apparels;

  const brandPages = Math.ceil(brandApparel.length / perPage);

  const prevPage = page - 1;
  const nextPage = page + 1;

  const prevLink =
    prevPage > 0
      ? `/shoes?page=${prevPage}&perPage=${perPage}${
          activeBrand ? `&category=${activeBrand}` : ""
        }`
      : null;

  const nextLink =
    nextPage <= brandPages
      ? `/shoes?page=${nextPage}&perPage=${perPage}${
          activeBrand ? `&category=${activeBrand}` : ""
        }`
      : null;

  return (
    <>
      <Head>
        <title>Apparel | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="Apparel at Shift Into Your Closet" />
        <meta name="keywords" content="apparel, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        id="apparel"
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <Combobox
          as="div"
          value={selectedApparel}
          onChange={setSelectedApparel}
          className="w-full"
          aria-label="Search Apparel"
        >
          <Combobox.Input
            placeholder="Search Apparel"
            className="w-full border border-accent-4 rounded-sm p-2 text-black bg-gray-200"
            onChange={(event) => setQuery(event.target.value)}
          />
          {filteredApparel.length > 0 && (
            <Combobox.Options>
              {autocompleteApparel.map((apparel) => (
                <Combobox.Option key={apparel.name} value={apparel.name} />
              ))}
            </Combobox.Options>
          )}
        </Combobox>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2">
            <Link href="/apparel">
              <button className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
                All Brands
              </button>
            </Link>
            {brands?.map((brand) => (
              <Link
                key={brand.slug?.current}
                href={`/apparel?brand=${brand?.slug?.current}`}
              >
                <button
                  className={cn(
                    "block text-sm leading-5 text-white hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-2",
                    { underline: activeBrand === brand.slug?.current }
                  )}
                >
                  {brand.name}
                </button>
              </Link>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-10">
            {filteredApparel.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
                {filteredApparel.map((apparel) => {
                  return (
                    <Link
                      key={apparel.slug?.current}
                      href={`/apparel/${apparel.slug?.current}`}
                    >
                      <div className="relative cursor-pointer overflow-hidden rounded-sm">
                        <div className="h-72 relative">
                          {apparel.mainImage?.asset?.url && (
                            <Image
                              src={apparel.mainImage.asset.url}
                              alt={`Image for ${apparel.name}`}
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
                            <div className="text-white uppercase font-bold pb-1">
                              {apparel.name}
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="bg-black py-1 px-5">
                            <div className="text-xl text-blue-400 font-bold">
                              ${apparel.price}
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
                No apparel found. Please check back as we get in new items
                weekly.
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-evenly gap-x-12">
          {filteredApparel.length > 0 && (
            <div className="flex mt-12 mb-4 text-white">
              {prevLink && (
                <Link
                  href={prevLink}
                  className="block py-4 px-4 ml-auto text-base font-semibold text-white hover:text-accent-4 tracking-wide transition-all duration-200 rounded-md"
                >
                  Previous
                </Link>
              )}
              <p className="m-4">
                Page {page} of {brandPages}
              </p>
              {nextLink && (
                <Link
                  href={nextLink}
                  className="block py-4 px-4 ml-auto text-base font-semibold text-white hover:text-accent-4 tracking-wide transition-all duration-200 rounded-md"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Apparel;
