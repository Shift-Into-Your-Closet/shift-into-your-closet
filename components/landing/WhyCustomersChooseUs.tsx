import Link from "next/link";
import { useSpring, animated } from "react-spring";

import { HiArrowRight, HiRefresh } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";
import { BiCheckShield } from "react-icons/bi";

const AnimatedWhyCustomersChooseUs = () => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });
  return (
    <animated.h4
      style={animation}
      className="-mt-2 max-w-xl text-left md:text-right text-5xl font-extrabold text-accent-0 leading-none tracking-tight"
    >
      Why Customers Choose Us.
    </animated.h4>
  );
};

function WhyCustomersChooseUs() {
  return (
    <>
      <section className="my-28">
        <div className="mx-auto max-w-7xl px-6 py-32  w-full text-white">
          <div className="flex flex-col md:flex-row justify-center mx-auto">
            <AnimatedWhyCustomersChooseUs />
            <div className="mt-0 md:ml-6 max-w-4xl mb-1 text-lg leading-8">
              <p className="mt-3 sm:mt-4 md:mt-0 text-xl text-left text-gray-200 font-light">
                Our vision has always been to create a marketplace for everyone.
                We are committed to bridging the gap between the consumer and
                the product.
              </p>
              <Link
                href="/about-us"
                className="flex items-center text-accent-0 pt-3 font-bold hover:underline cursor-pointer w-max-content"
              >
                Our story
                <HiArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="m-auto w-3/4 md:max-w-screen-xl">
            <div className="flex flex-col gap-4 mx-auto lg:flex-row">
              <div className="flex flex-col md:flex-row flex-1 gap-4">
                <div className="flex flex-col flex-1 items-center gap-4">
                  <div className="text-5xl text-white">
                    <SlPeople />
                  </div>
                  <span className="text-white font-roboto font-bold text-xl sm:text-2xl text-center">
                    Customer Satisfaction
                  </span>
                </div>
                <div className="flex flex-col flex-1 items-center gap-4">
                  <div className="text-5xl text-white">
                    <BiCheckShield />
                  </div>
                  <span className="text-white font-roboto font-bold  text-2xl text-center">
                    Authenticity Guaranteed
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row flex-1 gap-4">
                <div className="flex flex-col flex-1 items-center gap-4">
                  <div className="text-5xl text-white">
                    <BiCheckShield />
                  </div>
                  <span className="text-white font-roboto font-bold text-2xl text-center">
                    Order Guaranteed
                  </span>
                </div>
                <div className="flex flex-col flex-1 items-center gap-4">
                  <div className="text-5xl text-white">
                    <HiRefresh />
                  </div>
                  <span className="text-white font-roboto font-bold text-2xl text-center">
                    Inventory Refresh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyCustomersChooseUs;
