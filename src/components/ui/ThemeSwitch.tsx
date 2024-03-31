import ThemeAtom from "@/utils/ThemeAtom";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ThemeSwitch = () => {
  const [dark, setDark] = useAtom(ThemeAtom);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.65 }}
        className="rounded-full p-1 shadow-md shadow-yellow-500 "
        onClick={() => setDark(!dark)}
      >
        {dark ? (
          <BsSun className="h-5 w-5 duration-500 hover:rotate-45" />
        ) : (
          <BiMoon className="h-5 w-5 duration-500 hover:rotate-45" />
        )}
      </motion.div>
    </>
  );
};

export default ThemeSwitch;
