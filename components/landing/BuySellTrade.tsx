import Link from "next/link";

import { CiShoppingCart } from "react-icons/ci";
import { FaSellsy } from "react-icons/fa";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { useTrail, animated } from "react-spring";

function BuySellTrade() {
  const items = [
    {
      icon: <CiShoppingCart />,
      title: "Buy",
      text: "Our items are curated worldwide to provide the best customer experience.",
    },
    {
      icon: <FaSellsy />,
      title: "Sell",
      text: (
        <>
          If you would like to sell with us, please get in touch with us via{" "}
          <a
            className="underline text-lg hover:no-underline"
            href="mailto:shiftintoyourcloset@gmail.com?subject=Become%20a%20%20seller"
          >
            email
          </a>{" "}
          or{" "}
          <Link href="/sell" className="underline text-lg hover:no-underline">
            form
          </Link>
          .
        </>
      ),
    },
    {
      icon: <MdOutlineSwapHorizontalCircle />,
      title: "Trade",
      text: "Items that are available for trades will be listed in the item name.",
    },
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translate3d(0,-50%,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
  });

  return (
    <section className="my-20">
      <div className="w-full">
        <div className="m-auto w-3/4 md:max-w-screen-xl">
          <div className="flex flex-col gap-4 mx-auto lg:flex-row">
            <div className="flex flex-col md:flex-row flex-1 gap-4">
              {trail.map((props, index) => (
                <animated.div
                  key={index}
                  className="flex flex-col flex-1 items-center gap-4"
                  style={props}
                >
                  <div className="text-5xl text-white">{items[index].icon}</div>
                  <span className="text-white font-roboto font-bold text-xl sm:text-2xl text-center uppercase">
                    {items[index].title}
                  </span>
                  <span className="text-white font-roboto text-center">
                    {items[index].text}
                  </span>
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuySellTrade;
