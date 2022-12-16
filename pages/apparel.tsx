import { useMemo } from "react";
import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import cn from "clsx";
import client from "./../apollo-client";
import {
  AllApparelCategoriesDocument,
  AllApparelCategoriesQuery,
  AllApparelsDocument,
  AllApparelsQuery,
} from "./../graphql-operations";

type ApparelProps = {
  apparels: AllApparelsQuery["allApparel"];
  categories: AllApparelCategoriesQuery["allApparelCategory"];
};

export const getStaticProps: GetStaticProps<ApparelProps> = async () => {
  const [{ data: apparelData }, { data: apparelCategoryData }] =
    await Promise.all([
      client.query<AllApparelsQuery>({
        query: AllApparelsDocument,
      }),
      client.query<AllApparelCategoriesQuery>({
        query: AllApparelCategoriesDocument,
      }),
    ]);

  const copy = [...(apparelData?.allApparel ?? [])];
  return {
    props: {
      apparels: copy.sort((a, b) =>
        (a.category?.name || "").localeCompare(b.category?.name || "")
      ),
      categories: apparelCategoryData?.allApparelCategory ?? [],
    },
    revalidate: 200,
  };
};

const Apparel: NextPage<ApparelProps> = ({
  apparels,
  categories,
}: ApparelProps) => {
  const router = useRouter();
  const { category: activeCategory } = router.query;

  const filteredApparel = useMemo(() => {
    return activeCategory
      ? apparels.filter(
          (apparel) => apparel.category?.slug?.current === activeCategory
        )
      : apparels;
  }, [activeCategory, apparels]);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">
          <div className="col-span-8 lg:col-span-2">
            <Link href="/apparel">
              <button className="block leading-5 text-white no-underline font-bold tracking-wide hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-4">
                All Categories
              </button>
            </Link>
            {categories?.map((category) => (
              <Link
                key={category.slug?.current}
                href={`/apparel?category=${category?.slug?.current}`}
              >
                <button
                  className={cn(
                    "block text-sm leading-5 text-white hover:text-blue-400 hover:bg-accent-1 hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8 mb-2",
                    { underline: activeCategory === category.slug?.current }
                  )}
                >
                  {category.name}
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
      </section>
    </>
  );
};

export default Apparel;
