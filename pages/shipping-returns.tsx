import { NextPage } from "next";
import Head from "next/head";

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
        <meta name="theme-color" content="#327CDF" />
        <meta
          name="description"
          content="Return Policy at Shift Into Your Closet"
        />
        <meta name="keywords" content="return policy, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <section
        className="max-w-7xl mx-auto mt-5 px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 font-roboto dark:text-white min-h-screen"
        id="shipping-returns"
      >
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
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
