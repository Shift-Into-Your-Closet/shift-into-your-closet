import { useSpring } from "react-spring";

import type { NextPage } from "next";
import Head from "next/head";
import client from "../apollo-client";

import StaffPicks from "../components/landing/StaffPicks";
import NewArrivals from "../components/landing/NewArrivals";
import WhyCustomersChooseUs from "../components/landing/WhyCustomersChooseUs";

import {
  FeaturedAccessoriesQuery,
  FeaturedAccessoriesDocument,
  FeaturedApparelsQuery,
  FeaturedApparelsDocument,
  FeaturedShoesQuery,
  FeaturedShoesDocument,
  NewestAccessoriesQuery,
  NewestAccessoriesDocument,
  NewestApparelsDocument,
  NewestApparelsQuery,
  NewestShoesDocument,
  NewestShoesQuery,
} from "../graphql-operations";
import { animated } from "react-spring";

type HomeProps = {
  featuredAccessories: FeaturedAccessoriesQuery["allAccessory"];
  featuredApparels: FeaturedApparelsQuery["allApparel"];
  featuredShoes: FeaturedShoesQuery["allShoe"];
  newestAccessories: NewestAccessoriesQuery["allAccessory"];
  newestApparels: NewestApparelsQuery["allApparel"];
  newestShoes: NewestShoesQuery["allShoe"];
};

export async function getStaticProps() {
  const [
    { data: featuredAccessoriesData },
    { data: featuredApparelsData },
    { data: featuredShoesData },
    { data: newestAccessoriesData },
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
      featuredAccessories: featuredAccessoriesData?.allAccessory ?? [],
      featuredApparels: featuredApparelsData?.allApparel ?? [],
      featuredShoes: featuredShoesData?.allShoe ?? [],
      newestAccessories: newestAccessoriesData?.allAccessory ?? [],
      newestApparels: newestApparelData?.allApparel ?? [],
      newestShoes: newestShoesData?.allShoe ?? [],
    },
    revalidate: 86400, // Revalidate every day
  };
}

const MyAnimatedH1 = () => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <animated.h1
      style={animation}
      className="text-7xl font-title text-center text-white"
    >
      {" "}
      Shift Into Your <strong>Closet</strong>{" "}
    </animated.h1>
  );
};

const Home: NextPage<HomeProps> = ({
  featuredAccessories,
  featuredApparels,
  featuredShoes,
  newestAccessories,
  newestApparels,
  newestShoes,
}: HomeProps) => {
  return (
    <>
      <Head>
        <title>Shift Into Your Closet</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="Shift Into Your Closet" />
        <meta name="keywords" content="shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 font-roboto min-h-screen">
        <MyAnimatedH1 />
        <h2 className="text-3xl text-center tracking-widest mt-10 uppercase text-gray-400 font-bold">
          Staff Picks
        </h2>
        <StaffPicks
          featuredShoes={featuredShoes}
          featuredApparels={featuredApparels}
          featuredAccessories={featuredAccessories}
        />
        <h3 className="text-3xl text-center tracking-widest mb-3 uppercase text-gray-400 font-bold ">
          New Arrivals
        </h3>
        <NewArrivals
          newestShoes={newestShoes}
          newestApparels={newestApparels}
          newestAccessories={newestAccessories}
        />
        <WhyCustomersChooseUs />
      </section>
    </>
  );
};

export default Home;
