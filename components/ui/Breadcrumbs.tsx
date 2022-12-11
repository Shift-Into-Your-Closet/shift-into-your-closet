import Link from "next/link";
import { useRouter } from "next/router";

function Breadcrumbs() {
  const router = useRouter();
  let pageName = router.pathname
    .toLowerCase()
    .replace(/^\//, "")
    .replace(/^./, (firstChar) => firstChar.toUpperCase())
    .replace(/\/.+/, "");

    const shoeRegex = /^\/shoe\/.+/;
    const apparelRegex = /^\/apparel/;
    const accessoryRegex = /^\/accessory\/.+/;
    const shippingReturnsRegex = /^\/shipping-returns/;
    const hyphenatedPageRegex = /(.+-inquiry|about-us)$/;

    const isShoePage = shoeRegex.test(router.pathname);
    const isApparelPage = apparelRegex.test(router.pathname);
    const isAccessoryPage = accessoryRegex.test(router.pathname);
    const isShippingReturnsPage = shippingReturnsRegex.test(router.pathname);
    const isHyphenatedPage = hyphenatedPageRegex.test(router.pathname);

    const isProductPage = [isShoePage, isApparelPage, isAccessoryPage];

    switch (true) {
      case isShoePage || isAccessoryPage:
        pageName = pageName
          .replace(/shoe/i, "Shoes")
          .replace(/accessory/i, "Accessories");
        break;
      case isShippingReturnsPage:
        pageName = "Shipping & Returns";
        break;
      case isHyphenatedPage:
        pageName = pageName
          .replace(/-/g, " ")
          .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase());
        break;
    }

    let pagePath;

    switch (pageName) {
      case "Shoes":
        pagePath = "/shoes";
        break;
      case "Apparel":
        pagePath = "/apparel";
        break;
      case "Accessories":
        pagePath = "/accessories";
        break;
      default:
        pagePath = "/";
        break;
    }

    return (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
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
          <li aria-current="page" className="inline-flex items-center">
            {isProductPage ? (
              <Link
                href={pagePath}
                className="inline-flex items-center text-lg font-medium md:ml-2 cursor-pointer hover:text-blue-400"
              >
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
                    {pageName}
                  </span>
                </div>
              </Link>
            ) : (
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
                  {pageName}
                </span>
              </div>
            )}
          </li>
        </ol>
      </nav>
    );
}

export default Breadcrumbs;
