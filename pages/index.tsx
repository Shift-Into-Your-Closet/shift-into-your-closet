import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/global/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <Head>
          <title>Shift Into Your Closet</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
      </div>
      <Footer />
    </>
  );
};

export default Home;
