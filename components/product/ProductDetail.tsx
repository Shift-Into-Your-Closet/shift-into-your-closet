import cn from "clsx";

import { BiCheckShield } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";
import { Disclosure } from "@headlessui/react";
import { useSpring, animated } from "react-spring";

type ProductDetailProps = {
  title: string;
  children: string;
  index: number;
};

function ProductDetail({ title, children, index }: ProductDetailProps) {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: index * 200,
  });

  return (
    <animated.div style={props}>
      <div className="animate-fade-in-up">
        <Disclosure as="div" className="rounded-md">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full ml-2 py-2 text-lg font-medium text-left text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                {index < 2 ? (
                  <span className="text-white">
                    <BiCheckShield className="inline w-7 h-7 mr-2" />
                    {title}
                  </span>
                ) : (
                  <span className="text-white">
                    <CiDeliveryTruck className="inline w-7 h-7 mr-2" />
                    {title}
                  </span>
                )}
                <HiPlus
                  className={cn(
                    { ["rotate-45"]: open },
                    "w-7 h-7 mr-2 transition-all text-white"
                  )}
                />
              </Disclosure.Button>
              <animated.div style={props}>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-white">
                  {children}
                </Disclosure.Panel>
              </animated.div>
            </>
          )}
        </Disclosure>
      </div>
    </animated.div>
  );
}

export default ProductDetail;
