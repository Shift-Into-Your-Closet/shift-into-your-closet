import { useMemo, useState } from "react";
import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import cn from "clsx";
import client from "./../apollo-client";
import {
  AllShoeBrandsDocument,
  AllShoeBrandsQuery,
  AllShoesDocument,
  AllShoesQuery,
} from "./../graphql-operations";

import { Combobox } from "@headlessui/react";

type ShoeProps = {
  shoes: AllShoesQuery["allShoe"];
  brands: AllShoeBrandsQuery["allShoeBrand"];
};

export const getStaticProps: GetStaticProps<ShoeProps> = async (context) => {
  const { params = {} } = context;
  const page = Number(params.page) || 1;
  const perPage = Number(params.perPage) || 12;
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const [{ data: shoeData }, { data: shoeBrandData }] = await Promise.all([
    client.query<AllShoesQuery>({
      query: AllShoesDocument,
      variables: {
        offset,
        limit,
      },
    }),
    client.query<AllShoeBrandsQuery>({
      query: AllShoeBrandsDocument,
    }),
  ]);

  const copy = [...(shoeData?.allShoe ?? [])];
  const sortedBrands = [...(shoeBrandData?.allShoeBrand || [])].sort((a, b) =>
    (a.name || "").localeCompare(b.name || "")
  );

  return {
    props: {
      shoes: copy.sort((a, b) => (a.name || "").localeCompare(b.name || "")),
      brands: sortedBrands,
    },
    revalidate: 200,
  };
};

const Shoes: NextPage<ShoeProps> = ({ shoes, brands }: ShoeProps) => {
  const [selectedApparel, setSelectedApparel] = useState("");
  const [query, setQuery] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [condition, setCondition] = useState("");

  const handleSortOrder = () => {
    setSortPrice(sortPrice === "asc" ? "desc" : "asc");
  };

  const handleSelectedCondition = (selectedCondition: string) => {
    setCondition(selectedCondition);
  };

  const router = useRouter();
  const activeBrand = router.query.brand || "";
  const page = Number(router.query.page) || 1;
  const perPage = Number(router.query.perPage) || 12;
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const autocompleteShoes =
    query === ""
      ? shoes
      : shoes.filter((shoe) => {
          return shoe.name?.toLowerCase().includes(query.toLowerCase());
        });

  const filteredShoes = useMemo(() => {
    let brandShoes = activeBrand
      ? autocompleteShoes.filter((shoe) =>
          shoe.brand?.some((brand) => brand?.slug?.current === activeBrand)
        )
      : autocompleteShoes;

    brandShoes = brandShoes.filter((shoe) => {
      if (!condition) return true;
      return shoe.condition === condition;
    });

    brandShoes.sort((a, b) => {
      if (sortPrice === "asc") {
        return (a.price || 0) - (b.price || 0);
      }
      return (b.price || 0) - (a.price || 0);
    });

    return brandShoes.slice(offset, offset + limit);
  }, [activeBrand, autocompleteShoes, offset, limit, sortPrice, condition]);

  const brandShoes = activeBrand
    ? shoes.filter((shoe) =>
        shoe.brand?.some((brand) => brand?.slug?.current === activeBrand)
      )
    : shoes;

  const brandPages = Math.ceil(brandShoes.length / perPage);

  const prevPage = page - 1;
  const nextPage = page + 1;

  const prevLink =
    prevPage > 0
      ? `/apparel?page=${prevPage}&perPage=${perPage}${
          activeBrand ? `&category=${activeBrand}` : ""
        }`
      : null;

  const nextLink =
    nextPage <= brandPages
      ? `/apparel?page=${nextPage}&perPage=${perPage}${
          activeBrand ? `&category=${activeBrand}` : ""
        }`
      : null;

  return (
    <>
      <Head>
        <title>Shoes | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="Shoes at Shift Into Your Closet" />
        <meta name="keywords" content="shoes, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        id="shoes"
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <Combobox
          as="div"
          value={selectedApparel}
          onChange={setSelectedApparel}
          className="w-full"
          aria-label="Search Shoes"
        >
          <Combobox.Input
            placeholder="Search Shoes"
            className="w-full border border-accent-4 rounded-sm p-2 text-black bg-gray-200"
            onChange={(event) => setQuery(event.target.value)}
          />
          {filteredShoes.length > 0 && (
            <Combobox.Options>
              {autocompleteShoes.map((shoe) => (
                <Combobox.Option key={shoe.name} value={shoe.name} />
              ))}
            </Combobox.Options>
          )}
        </Combobox>
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
                    "block text-sm leading-5 text-white hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-2",
                    { underline: activeBrand === brand.slug?.current }
                  )}
                >
                  {brand.name}
                </button>
              </Link>
            ))}
          </div>

          <div className="col-span-10 lg:col-span-8">
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
              <div className="text-sm text-white">
                No shoes found. Please check back as we get in new items weekly.
              </div>
            )}
          </div>
          <div className="col-span-8 lg:col-span-2">
            <button
              className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4"
              onClick={handleSortOrder}
            >
              Price: Low to High {sortPrice === "asc"}
            </button>
            <button
              className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4"
              onClick={handleSortOrder}
            >
              Price: High to Low{sortPrice === "desc"}
            </button>
            <button
              className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4"
              onClick={() => handleSelectedCondition("brand-new")}
            >
              Brand New
            </button>
            <button
              className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4"
              onClick={() => handleSelectedCondition("tried-on")}
            >
              Tried On
            </button>
            <button
              className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4"
              onClick={() => handleSelectedCondition("worn")}
            >
              Worn
            </button>
          </div>
        </div>
        <div className="flex justify-evenly gap-x-12">
          {filteredShoes.length > 0 && (
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

export default Shoes;
