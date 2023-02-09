import { animated, useSpring } from "react-spring";

import type { NextPage } from "next";
import Head from "next/head";
import client from "../apollo-client";

import StaffPicks from "../components/landing/StaffPicks";
import NewArrivals from "../components/landing/NewArrivals";
import WhyCustomersChooseUs from "../components/landing/WhyCustomersChooseUs";
import BackToTopButton from "../components/ui/BackToTopButton";

import {
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

type HomeProps = {
  featuredApparels: FeaturedApparelsQuery["allApparel"];
  featuredShoes: FeaturedShoesQuery["allShoe"];
  newestAccessories: NewestAccessoriesQuery["allAccessory"];
  newestApparels: NewestApparelsQuery["allApparel"];
  newestShoes: NewestShoesQuery["allShoe"];
};

export async function getStaticProps() {
  const [
    { data: featuredApparelsData },
    { data: featuredShoesData },
    { data: newestAccessoriesData },
    { data: newestApparelData },
    { data: newestShoesData },
  ] = await Promise.all([
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
      featuredApparels: featuredApparelsData?.allApparel ?? [],
      featuredShoes: featuredShoesData?.allShoe ?? [],
      newestAccessories: newestAccessoriesData?.allAccessory ?? [],
      newestApparels: newestApparelData?.allApparel ?? [],
      newestShoes: newestShoesData?.allShoe ?? [],
    },
    revalidate: 86400, // Revalidate every day
  };
}

const ShiftIntoYourCloset = () => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });
  return (
    <animated.h1
      style={animation}
      className="text-7xl font-title text-center text-white"
    >
      Shift Into Your <strong>Closet</strong>
    </animated.h1>
  );
};

const Home: NextPage<HomeProps> = ({
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
        <ShiftIntoYourCloset />
        <StaffPicks
          featuredShoes={featuredShoes}
          featuredApparels={featuredApparels}
          hasShowMore={true}
        />
        <NewArrivals
          newestShoes={newestShoes}
          newestApparels={newestApparels}
          newestAccessories={newestAccessories}
        />
        <WhyCustomersChooseUs />
        <div className="flex justify-end">
          <BackToTopButton />
        </div>
      </section>
    </>
  );
};

export default Home;
