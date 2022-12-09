import type { NextPage } from "next";
import Head from "next/head";
import client from "../apollo-client";
import WhyCustomersChooseUs from "../components/landing/WhyCustomersChooseUs";
import StaffPicks from "../components/landing/StaffPicks";
import {
  FeaturedShoesQuery,
  FeaturedShoesDocument,
  FeaturedApparelsQuery,
  FeaturedApparelsDocument,
  NewestApparelsDocument,
  NewestApparelsQuery,
  NewestShoesDocument,
  NewestShoesQuery,
  FeaturedAccessoriesQuery,
  FeaturedAccessoriesDocument,
} from "../graphql-operations";
import NewArrivals from "../components/landing/NewArrivals";

type HomeProps = {
  featuredApparels: FeaturedApparelsQuery["allApparel"];
  featuredAccessories: FeaturedAccessoriesQuery["allAccessories"];
  featuredShoes: FeaturedShoesQuery["allShoe"];
  newestApparels: NewestApparelsQuery["allApparel"];
  newestShoes: NewestShoesQuery["allShoe"];
};

export async function getStaticProps() {
  const [
    { data: featuredAccessoriesData },
    { data: featuredApparelsData },
    { data: featuredShoesData },
    { data: newestApparelData },
    { data: newestShoesData },
  ] = await Promise.all([
    client.query<FeaturedAccessoriesQuery>({
      query: FeaturedAccessoriesDocument,
    }),
    client.query<FeaturedApparelsQuery>({
      query: FeaturedApparelsDocument,
    }),
    client.query<FeaturedShoesQuery>({
      query: FeaturedShoesDocument,
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
      featuredAccessories: featuredAccessoriesData?.allAccessories ?? [],
      featuredApparels: featuredApparelsData?.allApparel ?? [],
      featuredShoes: featuredShoesData?.allShoe ?? [],
      newestApparels: newestApparelData?.allApparel ?? [],
      newestShoes: newestShoesData?.allShoe ?? [],
    },
    revalidate: 86400, // Revalidate every day
  };
}

const Home: NextPage<HomeProps> = ({
  featuredAccessories,
  featuredApparels,
  featuredShoes,
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
        <StaffPicks
          featuredShoes={featuredShoes}
          featuredAccessories={featuredAccessories}
          featuredApparels={featuredApparels}
        />
        <h3 className="text-3xl text-center tracking-widest mb-3 uppercase text-gray-400 font-bold ">
          New Arrivals
        </h3>
        <NewArrivals
          newestApparels={newestApparels}
          newestShoes={newestShoes}
        />
        <WhyCustomersChooseUs />
      </section>
    </div>
  );
};

export default Home;
