import type { NextPage } from "next";
import Head from "next/head";
import ShopWithUs from "../components/landing/ShopWithUs";

const Home: NextPage = () => {
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
      </section>
    </div>
  );
};

export default Home;
