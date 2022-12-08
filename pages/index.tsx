import type { NextPage } from "next";
import Head from "next/head";
import client from "../apollo-client";
import ShopWithUs from "../components/landing/ShopWithUs";
import NewArrivals from "../components/landing/NewArrivals";
import {
  NewestAccessoriesDocument,
  NewestAccessoriesQuery,
  NewestApparelsDocument,
  NewestApparelsQuery,
  NewestShoesDocument,
  NewestShoesQuery,
} from "../graphql-operations";

type HomeProps = {
  newestAccessories: NewestAccessoriesQuery["allAccessories"];
  newestApparels: NewestApparelsQuery["allApparel"];
  newestShoes: NewestShoesQuery["allShoe"];
};

export async function getStaticProps() {
  const [
    { data: newestAccessoriesData },
    { data: newestApparelData },
    { data: newestShoesData },
  ] = await Promise.all([
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
      newestAccessories: newestAccessoriesData?.allAccessories ?? [],
      newestApparels: newestApparelData?.allApparel ?? [],
      newestShoes: newestShoesData?.allShoe ?? [],
    },
    revalidate: 86400, // Revalidate every day
  };
}

const Home: NextPage<HomeProps> = ({
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
        <ShopWithUs />
        <h4 className="text-3xl text-center tracking-widest mb-3 uppercase text-gray-400 font-bold ">
          New Arrivals
        </h4>
        <NewArrivals
          newestAccessories={newestAccessories}
          newestApparels={newestApparels}
          newestShoes={newestShoes}
        />
      </section>
    </div>
  );
};

export default Home;
