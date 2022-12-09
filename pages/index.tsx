import type { NextPage } from "next";
import Head from "next/head";
import client from "../apollo-client";
import ShopWithUs from "../components/landing/ShopWithUs";
import FeaturedShoes from "../components/landing/FeaturedShoes";
import {
  FeaturedShoesQuery,
  FeaturedShoesDocument,
  NewestAccessoriesDocument,
  NewestAccessoriesQuery,
  NewestApparelsDocument,
  NewestApparelsQuery,
  NewestShoesDocument,
  NewestShoesQuery,
} from "../graphql-operations";
import NewApparelArrivals from "../components/landing/NewApparelArrivals";
import NewShoeArrivals from "../components/landing/NewArrivals";
import NewArrivals from "../components/landing/NewArrivals";

type HomeProps = {
  newestAccessories: NewestAccessoriesQuery["allAccessories"];
  newestApparels: NewestApparelsQuery["allApparel"];
  newestShoes: NewestShoesQuery["allShoe"];
  featuredShoes: FeaturedShoesQuery["allShoe"];
};

export async function getStaticProps() {
  const [
    { data: featuredShoesData },
    { data: newestAccessoriesData },
    { data: newestApparelData },
    { data: newestShoesData },
  ] = await Promise.all([
    client.query<FeaturedShoesQuery>({
      query: FeaturedShoesDocument,
    }),
    client.query<NewestAccessoriesQuery>({
      query: NewestAccessoriesDocument,
    }),
    client.query<NewestApparelsQuery>({
      query: NewestApparelsDocument,
    }),
    client.query<NewestShoesQuery>({
      query: NewestShoesDocument,
    }),
  ]);

  return {
    props: {
      featuredShoes: featuredShoesData?.allShoe ?? [],
      newestAccessories: newestAccessoriesData?.allAccessories ?? [],
      newestApparels: newestApparelData?.allApparel ?? [],
      newestShoes: newestShoesData?.allShoe ?? [],
    },
    revalidate: 86400, // Revalidate every day
  };
}

const Home: NextPage<HomeProps> = ({
  featuredShoes,
  newestAccessories,
  newestApparels,
  newestShoes,
}: HomeProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Shift Into Your Closet</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="Shift Into Your Closet" />
        <meta name="keywords" content="shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 font-roboto min-h-screen">
        <h1 className="text-7xl font-title text-center text-white">
          Shift Into Your <strong>Closet</strong>
        </h1>
        <h2 className="text-3xl text-center tracking-widest mt-10 uppercase text-gray-400 font-bold">
          Staff Picks
        </h2>
        <FeaturedShoes featuredShoes={featuredShoes} />
        <h3 className="text-3xl text-center tracking-widest mb-3 uppercase text-gray-400 font-bold ">
          New Arrivals
        </h3>
        <NewArrivals
          newestAccessories={newestAccessories}
          newestApparels={newestApparels}
          newestShoes={newestShoes}
        />
        <ShopWithUs />
      </section>
    </div>
  );
};

export default Home;
