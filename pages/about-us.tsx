import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Breadcrumbs from "../components/ui/Breadcrumbs";

type AboutProps = {
  title: string;
  children?: React.ReactNode;
};

function About({ title, children }: AboutProps) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4 text-xl font-light">{children}</div>
    </>
  );
}

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="About Us at Shift Into Your Closet" />
        <meta name="keywords" content="about us, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 text-white min-h-screen"
        id="about-us"
      >
        <Breadcrumbs />
        <h1 className="sr-only mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          About Us
        </h1>
        <p className="mt-4 text-xl font-light">
          Shift Into Your Closet was founded in 2019. My vision is to be able to
          provide an accessible marketplace for everyone. Our inventory is
          supplied by trusted sellers. If you would like to become a seller on
          our platform, you can reach us at {""}
          <a
            className="underline text-lg italic hover:no-underline"
            href="mailto:shiftintoyourcloset@gmail.com?subject=Become%20a%20%20seller"
          >
            shiftintoyourcloset@gmail.com
          </a>
          .
        </p>
        <About title="How It Works">
          <p>
            We are an email to order service. Emails will be responded to in the
            order that they are received. We will do our best to provide a reply
            ASAP. Item(s) will be removed from our site as the item or size
            sells out. Please expect a delayed response during observed
            holidays. We are located in the Bay Area (PDT) and our response time
            may vary in different time zones.
          </p>
        </About>
        <About title="An Accessible Marketplace">
          <p>
            We are always looking to grow and expand our selection. If an item
            isn't available on our online store, please let us know by using our{" "}
            <Link
              href="/wishlist"
              className="underline text-lg hover:no-underline "
            >
              wishlist
            </Link>
            . You'll receive early access before the item is available to the
            general public.
          </p>
        </About>
      </section>
    </>
  );
};

export default AboutUs;
