import Link from "next/link";

import { CiShoppingCart } from "react-icons/ci";
import { FaSellsy } from "react-icons/fa";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";

function BuySellTrade() {
  return (
    <>
      <section className="my-28">
        <div className="w-full">
          <div className="m-auto w-3/4 md:max-w-screen-xl">
            <div className="flex flex-col gap-4 mx-auto lg:flex-row">
              <div className="flex flex-col md:flex-row flex-1 gap-4">
                <div className="flex flex-col flex-1 items-center gap-4">
                  <div className="text-5xl text-white">
                    <CiShoppingCart />
                  </div>
                  <span className="text-white font-roboto font-bold text-xl sm:text-2xl text-center">
                    Buy
                  </span>
                  <span className="text-white font-roboto text-center">
                    Our items are curated worldwide to provide the best shopping
                    experience.
                  </span>
                </div>
                <div className="flex flex-col flex-1 items-center gap-4">
                  <div className="text-5xl text-white">
                    <FaSellsy />
                  </div>
                  <span className="text-white font-roboto font-bold text-2xl text-center">
                    Sell
                  </span>
                  <span className="text-white font-roboto text-center">
                    If you would like to sell with us, please get in touch with
                    us via {""}
                    <a
                      className="underline text-lg hover:no-underline"
                      href="mailto:shiftintoyourcloset@gmail.com?subject=Become%20a%20%20seller"
                    >
                      email
                    </a>{" "}
                    or{" "}
                    <Link
                      href="/sell"
                      className="underline text-lg hover:no-underline"
                    >
                      form
                    </Link>
                    .
                  </span>
                </div>
                <div className="flex flex-col flex-1 items-center gap-4">
                  <div className="text-5xl text-white">
                    <MdOutlineSwapHorizontalCircle />
                  </div>
                  <span className="text-white font-roboto font-bold text-2xl text-center">
                    Trade
                  </span>
                  <span className="text-white font-roboto text-center">
                    Items that are available for trades will be listed in the
                    item name.
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

export default BuySellTrade;
