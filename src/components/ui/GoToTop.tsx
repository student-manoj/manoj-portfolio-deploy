import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi2";

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed bottom-24 right-4 -translate-y-96 rounded-full p-1 text-4xl opacity-0 shadow-md ring-2 ring-yellow-500 duration-500 lg:bottom-6 lg:right-6 ${
          showButton ? "translate-y-0 cursor-pointer opacity-100" : ""
        }`}
        onClick={scrollToTop}
      >
        <HiChevronDoubleUp />

        <div className="text-3xl text-yellow-500"></div>
      </div>
    </>
  );
};

export default GoToTop;
