import { useMemo, useState } from "react";
import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import cn from "clsx";
import client from "../apollo-client";
import {
  AllFootwearCategoriesDocument,
  AllFootwearCategoriesQuery,
  AllShoeBrandsDocument,
  AllShoeBrandsQuery,
  AllShoesDocument,
  AllShoesQuery,
} from "../graphql-operations";

import { Combobox, Listbox } from "@headlessui/react";
import BackToTopButton from "../components/ui/BackToTopButton";

type ShoeProps = {
  shoes: AllShoesQuery["allShoe"];
  brands: AllShoeBrandsQuery["allShoeBrand"];
  categories: AllFootwearCategoriesQuery["allFootwearCategory"];
};

export const getStaticProps: GetStaticProps<ShoeProps> = async (context) => {
  const { params = {} } = context;
  const page = Number(params.page) || 1;
  const perPage = Number(params.perPage) || 12;
  const offset = (page - 1) * perPage;
  const limit = perPage;

  const [
    { data: shoeData },
    { data: shoeBrandData },
    { data: footwearCategoryData },
  ] = await Promise.all([
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
    client.query<AllFootwearCategoriesQuery>({
      query: AllFootwearCategoriesDocument,
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
      categories: footwearCategoryData?.allFootwearCategory ?? [],
    },
    revalidate: 200,
  };
};

const Shoes: NextPage<ShoeProps> = ({
  shoes,
  brands,
  categories,
}: ShoeProps) => {
  const [selectedShoe, setSelectedShoe] = useState("");
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [arrivalOrder, setArrivalOrder] = useState("");
  const [condition, setCondition] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const handleSelectedBrand = (selectedBrand: string) => {
    setSelectedBrand(selectedBrand);
  };

  const handleSelectedCategory = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
  };

  const handleSelectedArrival = (selectedArrival: string) => {
    setArrivalOrder(selectedArrival);
  };

  const handleSelectedCondition = (selectedCondition: string) => {
    setCondition(selectedCondition);
  };

  const handleSortPriceOrder = (selectedSortPrice: string) => {
    setSortPrice(selectedSortPrice);
  };

  const handleSortOrder = (selectedSortOrder: string) => {
    setSortOrder(selectedSortOrder);
  };

  const arrivalOptions = [
    { value: "newest-to-oldest", text: "Newest to Oldest" },
    { value: "oldest-to-newest", text: "Oldest to Newest" },
  ];

  const conditionOptions = [
    { value: "brand-new", text: "Brand New" },
    { value: "tried-on", text: "Tried On" },
    { value: "worn", text: "Worn" },
  ];

  const priceOptions = [
    { value: "asc", text: "Low to High" },
    { value: "desc", text: "High to Low" },
  ];

  const orderOptions = [
    { value: "asc", text: "A to Z" },
    { value: "desc", text: "Z to A" },
  ];

  const selectedArrivalOption = arrivalOptions.find(
    (option) => option.value === arrivalOrder
  );

  const selectedPriceOption = priceOptions.find(
    (option) => option.value === sortPrice
  );

  const selectedSortOption = orderOptions.find(
    (option) => option.value === sortOrder
  );

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
    let brandShoes = selectedBrand
      ? autocompleteShoes.filter((shoe) =>
          shoe.brand?.some((brand) => brand?.name === selectedBrand)
        )
      : autocompleteShoes;

    brandShoes = selectedCategory
      ? brandShoes.filter((shoe) => shoe.category?.name === selectedCategory)
      : brandShoes;

    brandShoes = brandShoes.filter((shoe) => {
      if (!condition) return true;
      return shoe.condition === condition;
    });

    brandShoes.sort((a, b) => {
      if (sortPrice === "asc") {
        return (a.price || 0) - (b.price || 0);
      } else if (sortPrice === "desc") {
        return (b.price || 0) - (a.price || 0);
      } else if (arrivalOrder === "newest-to-oldest") {
        return (
          new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
        );
      } else if (arrivalOrder === "oldest-to-newest") {
        return (
          new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
        );
      } else if (sortOrder === "asc") {
        return (a.name || "").localeCompare(b.name || "");
      } else if (sortOrder === "desc") {
        return (b.name || "").localeCompare(a.name || "");
      }
      return 0;
    });
    return brandShoes.slice(offset, offset + limit);
  }, [
    autocompleteShoes,
    offset,
    limit,
    selectedBrand,
    selectedCategory,
    arrivalOrder,
    condition,
    sortPrice,
    sortOrder,
  ]);

  const brandShoes = selectedBrand
    ? shoes.filter((shoe) =>
        shoe.brand?.some((brand) => brand?.slug?.current === selectedBrand)
      )
    : shoes;

  const brandPages = Math.ceil(brandShoes.length / perPage);

  const prevPage = page - 1;
  const nextPage = page + 1;

  const prevLink =
    prevPage > 0
      ? `/shoes?page=${prevPage}&perPage=${perPage}${
          activeBrand ? `&brand=${activeBrand}` : ""
        }`
      : null;

  const nextLink =
    nextPage <= brandPages
      ? `/shoes?page=${nextPage}&perPage=${perPage}${
          activeBrand ? `&brand=${activeBrand}` : ""
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2">
            <div className="space-y-4">
              {/* Brand Filter */}
              <Listbox value={selectedBrand} onChange={handleSelectedBrand}>
                <div className="relative">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <span className="block truncate">
                      {selectedBrand || "All Brands"}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.293 7.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 8.121a1 1 0 01-1.414-1.414z"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      key="all-brands"
                      value=""
                      className={({ active }) =>
                        cn(
                          active ? "text-white bg-blue-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-10 pr-4"
                        )
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            All Brands
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                    {brands?.map((brand) => (
                      <Listbox.Option
                        key={brand.slug?.current}
                        value={brand.name}
                        className={({ active }) =>
                          cn(
                            active ? "text-white bg-blue-600" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-10 pr-4"
                          )
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={cn(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {brand.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
              {/* Category Filter */}
              <Listbox
                value={selectedCategory}
                onChange={handleSelectedCategory}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <span className="block truncate">
                      {selectedCategory || "All Categories"}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.293 7.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 8.121a1 1 0 01-1.414-1.414z"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      key="all-categories"
                      value=""
                      className={({ active }) =>
                        cn(
                          active ? "text-white bg-blue-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-10 pr-4"
                        )
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            All Categories
                          </span>
                        </>
                      )}
                    </Listbox.Option>

                    {categories?.map((category) => (
                      <Listbox.Option
                        key={category.slug?.current}
                        value={category.name}
                        className={({ active }) =>
                          cn(
                            active ? "text-white bg-blue-600" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-10 pr-4"
                          )
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={cn(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {category.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              {/* Arrivals Filter */}
              <Listbox value={arrivalOrder} onChange={handleSelectedArrival}>
                <div className="relative">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <span className="block truncate">
                      {selectedArrivalOption?.text || "Filter by Arrivals"}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.293 7.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 8.121a1 1 0 01-1.414-1.414z"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      key="all"
                      value=""
                      className={({ active }) =>
                        cn(
                          active ? "text-white bg-blue-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-10 pr-4"
                        )
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            All
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                    {arrivalOptions.map((option) => (
                      <Listbox.Option
                        key={option.value}
                        value={option.value}
                        className={({ active }) =>
                          cn(
                            active ? "text-white bg-blue-600" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-10 pr-4"
                          )
                        }
                        onClick={() => handleSelectedArrival(option.value)}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={cn(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {option.text}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              {/* Condition Filter */}
              <Listbox value={condition} onChange={handleSelectedCondition}>
                <div className="relative">
                  <Listbox.Button className="w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <span className="block truncate">
                      {condition
                        ? capitalizeWords(condition.replace("-", " "))
                        : "Filter by Condition"}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L10 5.414V16a1 1 0 1 1-2 0V5.414L6.707 6.707a1 1 0 0 1-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      key="all-conditions"
                      value=""
                      className={({ active }) =>
                        cn(
                          active ? "text-white bg-blue-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-10 pr-4"
                        )
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            All Conditions
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                    {conditionOptions.map((option) => (
                      <Listbox.Option
                        key={option.value}
                        value={option.value}
                        className={({ active }) =>
                          cn(
                            active ? "text-white bg-blue-600" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-10 pr-4"
                          )
                        }
                        onClick={() => handleSortPriceOrder(option.value)}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={cn(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {option.text}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              {/* Price Filter */}
              <Listbox value={sortPrice} onChange={handleSortPriceOrder}>
                <div className="relative">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <span className="block truncate">
                      {selectedPriceOption?.text || "Sort by Price"}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.293 7.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 8.121a1 1 0 01-1.414-1.414z"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      key="all-conditions"
                      value=""
                      className={({ active }) =>
                        cn(
                          active ? "text-white bg-blue-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-10 pr-4"
                        )
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            All
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                    {priceOptions.map((option) => (
                      <Listbox.Option
                        key={option.value}
                        value={option.value}
                        className={({ active }) =>
                          cn(
                            active ? "text-white bg-blue-600" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-10 pr-4"
                          )
                        }
                        onClick={() => handleSortPriceOrder(option.value)}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={cn(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {option.text}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
              {/* Alphabetical Filter */}

              <Listbox value={sortOrder} onChange={handleSortOrder}>
                <div className="relative">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <span className="block truncate">
                      {selectedSortOption?.text || "Sort Alphabetically"}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.293 7.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 8.121a1 1 0 01-1.414-1.414z"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <Listbox.Option
                      key="all"
                      value=""
                      className={({ active }) =>
                        cn(
                          active ? "text-white bg-blue-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-10 pr-4"
                        )
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={cn(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            All
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                    {orderOptions.map((option) => (
                      <Listbox.Option
                        key={option.value}
                        value={option.value}
                        className={({ active }) =>
                          cn(
                            active ? "text-white bg-blue-600" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-10 pr-4"
                          )
                        }
                        onClick={() => handleSortOrder(option.value)}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={cn(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {option.text}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>

          <div className="col-span-10 lg:col-span-8">
            <div className="mb-5">
              <Combobox
                as="div"
                value={selectedShoe}
                onChange={setSelectedShoe}
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
            </div>
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
          <div className="col-span-8 lg:col-span-2"></div>
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
        <div className="flex justify-end">
          <BackToTopButton />
        </div>
      </section>
    </>
  );
};

export default Shoes;
