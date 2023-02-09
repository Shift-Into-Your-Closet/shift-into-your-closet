import { useEffect, useRef } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

function BackToTopButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (buttonRef.current) {
        buttonRef.current.style.display =
          window.pageYOffset > 0 ? "block" : "none";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button ref={buttonRef} onClick={handleClick} className="text-white">
      Back to Top
      <HiChevronDoubleUp className="w-5 h-5 inline ml-2 hover:text-slate-700" />
    </button>
  );
}

export default BackToTopButton;
