import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type ShippingReturnPolicyProps = {
  title: string;
  children?: React.ReactNode;
};

function Policy({ title, children }: ShippingReturnPolicyProps) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4 text-xl font-light">{children}</div>
    </>
  );
}

const ShippingReturn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shipping & Return Policy | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta
          name="description"
          content="Return Policy at Shift Into Your Closet"
        />
        <meta name="keywords" content="return policy, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 font-roboto text-white min-h-screen"
        id="shipping-returns"
      >
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-medium md:ml-2 cursor-pointer hover:text-blue-400"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-lg font-medium md:ml-2">
                  Shipping & Return Policy
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Shipping & Return Policy
        </h1>
        <p className="mt-4 text-xl font-light">
          Welcome to Shift Into Your Closet. Please find our shipping and return
          policy below.
        </p>
        <Policy title="Locals">
          <p>
            If you are currently located in the San Francisco Bay Area, we may
            be able to accomodate a meetup depending on the seller's location.
            Please mention while inquiring that you would prefer to meet up
            rather than having your products shipped.
          </p>
        </Policy>
        <Policy title="Shipping">
          <p>
            All product(s) will be shipped via USPS priority. Tracking will be
            provided within 24 hours of the product(s) being shipped.
          </p>
        </Policy>
        <Policy title="Returns">
          <p>
            All items purchased are final sale. We aim to provide as many
            detailed pictures as possible and will provide more upon request. We
            want our customers to be 100% satisfied with the products that they
            are receiving.
          </p>
        </Policy>
      </section>
    </>
  );
};

export default ShippingReturn;
