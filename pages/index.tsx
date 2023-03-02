import type { NextPage } from "next";
import Head from "next/head";
import client from "../apollo-client";

import StaffPicks from "../components/landing/StaffPicks";
import NewArrivals from "../components/landing/NewArrivals";
import WhyCustomersChooseUs from "../components/landing/WhyCustomersChooseUs";
import BackToTopButton from "../components/ui/BackToTopButton";
import BuySellTrade from "../components/landing/BuySellTrade";

import { animated, useTrail } from "react-spring";
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

const ShiftsCloset = () => {
  const text = "Shift's Closet";
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(text.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 50 },
    delay: 1000,
  });

  return (
    <h1 className="text-7xl font-bold text-center">
      {trail.map(({ x, opacity }, index) => (
        <animated.span
          key={index}
          style={{
            opacity,
            transform: x.to((x) => `translate3d(${x}px,0,0)`),
            color: x.to([0, 100], ["white", "#60a5fa"]),
          }}
        >
          {text[index]}
        </animated.span>
      ))}
    </h1>
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
        <title>Shift's Closet</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="Shift's Closet" />
        <meta name="keywords" content="shift's closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 font-roboto min-h-screen">
        <ShiftsCloset />
        <BuySellTrade />
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
