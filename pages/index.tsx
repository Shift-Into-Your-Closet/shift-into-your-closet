import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/global/Navbar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Head>
        <title>Shift Into Your Closet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
