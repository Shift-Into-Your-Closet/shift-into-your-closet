import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Shift Into Your Closet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 font-roboto dark:text-white min-h-screen">
        <h1 className="text-7xl font-title">
          Shift Into Your <strong>Closet</strong>
        </h1>
      </section>
    </div>
  );
};

export default Home;
