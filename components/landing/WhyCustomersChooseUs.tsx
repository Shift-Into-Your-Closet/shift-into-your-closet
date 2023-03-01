import Link from "next/link";
import { HiArrowRight, HiRefresh } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";
import { BiCheckShield } from "react-icons/bi";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function WhyCustomersChooseUs() {
  const [props, set] = useSpring(() => ({
    transform: "translateY(0px)",
    opacity: 1,
  }));

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const whyCustomersChooseUsAnimation = useSpring({
    transform: inView ? "scale(1)" : "scale(0)",
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 1000,
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    delay: 1500,
  });

  const ourStoryAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100px)",
    config: { duration: 300 },
    delay: 2000,
  });

  const arrowAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100px)",
    config: { duration: 300 },
    delay: 2000,
  });

  const iconAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 2500,
  });

  const iconTextAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    delay: 2500,
  });

  return (
    <>
      <section ref={ref} className="my-20">
        <div className="mx-auto max-w-7xl px-6 py-20 w-full text-white">
          <div className="flex flex-col md:flex-row justify-center mx-auto">
            <animated.h4
              style={whyCustomersChooseUsAnimation}
              className="-mt-2 max-w-xl text-left md:text-right text-5xl font-extrabold text-accent-0 leading-none tracking-tight"
            >
              Why Customers Choose Us.
            </animated.h4>
            <div className="mt-0 md:ml-6 max-w-4xl mb-1 text-lg leading-8">
              <animated.p
                className="mt-3 sm:mt-4 md:mt-0 text-xl text-left text-gray-200 font-light"
                style={textAnimation}
              >
                Our vision has always been to create a marketplace for everyone.
                We are committed to bridging the gap between the consumer and
                the product.
              </animated.p>
              <Link
                href="/about-us"
                className="flex items-center text-accent-0 pt-3 font-bold hover:underline cursor-pointer w-max-content"
              >
                <animated.span style={ourStoryAnimation}>
                  Our story
                </animated.span>
                <animated.span style={arrowAnimation}>
                  <HiArrowRight className="ml-1" />
                </animated.span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="m-auto w-3/4 md:max-w-screen-xl">
            <div className="flex flex-col gap-4 mx-auto lg:flex-row">
              <div className="flex flex-col md:flex-row flex-1 gap-4">
                <div className="flex flex-col flex-1 items-center gap-4">
                  <animated.div
                    style={iconAnimation}
                    className="text-5xl text-white"
                  >
                    <SlPeople />
                  </animated.div>
                  <animated.span
                    style={iconTextAnimation}
                    className="text-white font-roboto font-bold text-xl sm:text-2xl text-center"
                  >
                    Customer Satisfaction
                  </animated.span>
                </div>
                <div className="flex flex-col flex-1 items-center gap-4">
                  <animated.div
                    style={iconAnimation}
                    className="text-5xl text-white"
                  >
                    <BiCheckShield />
                  </animated.div>
                  <animated.span
                    style={iconTextAnimation}
                    className="text-white font-roboto font-bold text-xl sm:text-2xl text-center"
                  >
                    Authenticity Guaranteed
                  </animated.span>
                </div>
                <div className="flex flex-col flex-1 items-center gap-4">
                  <animated.div
                    style={iconAnimation}
                    className="text-5xl text-white"
                  >
                    <BiCheckShield />
                  </animated.div>
                  <animated.span
                    style={iconTextAnimation}
                    className="text-white font-roboto font-bold text-xl sm:text-2xl text-center"
                  >
                    Order Guaranteed
                  </animated.span>
                </div>

                <div className="flex flex-col flex-1 items-center gap-4">
                  <animated.div
                    style={iconAnimation}
                    className="text-5xl text-white"
                  >
                    <HiRefresh />
                  </animated.div>
                  <animated.span
                    style={iconTextAnimation}
                    className="text-white font-roboto font-bold text-xl sm:text-2xl text-center"
                  >
                    Inventory Refresh
                  </animated.span>
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
