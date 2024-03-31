import { MutableRefObject, useRef, useState } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const MainSection = () => {
  const [nav, setNav] = useState(false);

  const About: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const Project: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const Contact: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const scrollHandler = (elmRef: any) => {
    console.log(elmRef);

    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };
  return (
    <>
      <div className="left-[480px] -mt-16 hidden justify-center gap-8 md:flex">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          className="h-7 cursor-pointer border-yellow-300 text-lg font-semibold duration-500 hover:border-b-2"
        >
          Home
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.75 }}
          onClick={() => scrollHandler(About)}
          className="h-7 cursor-pointer border-yellow-300 text-lg font-semibold duration-500 hover:border-b-2"
        >
          About
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.05 }}
          onClick={() => scrollHandler(Project)}
          className="h-7 cursor-pointer border-yellow-300 text-lg font-semibold duration-500 hover:border-b-2"
        >
          Project
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.35 }}
          onClick={() => scrollHandler(Contact)}
          className="h-7 cursor-pointer border-yellow-300 text-lg font-semibold duration-500 hover:border-b-2"
        >
          Contact
        </motion.div>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="-mt-16 ml-[345px] flex cursor-pointer items-center text-3xl text-white duration-500 md:hidden"
      >
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {nav && (
        <div
          onClick={() => setNav(false)}
          className="fixed top-20 z-30 h-screen w-full bg-slate-900/90 backdrop-blur"
        >
          <div className="flex flex-col items-center justify-center gap-8 py-3 text-xl">
            <div className="cursor-pointer text-lg font-semibold">Home</div>
            <div
              onClick={() => scrollHandler(About)}
              className="cursor-pointer text-lg font-semibold"
            >
              About
            </div>
            <div
              onClick={() => scrollHandler(Project)}
              className="cursor-pointer text-lg font-semibold"
            >
              Project
            </div>
            <div
              onClick={() => scrollHandler(Contact)}
              className="cursor-pointer text-lg font-semibold"
            >
              Contact
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex h-full w-full items-center justify-center lg:h-screen">
          <HomePage />
        </div>
        <div
          ref={About}
          className="flex h-full w-full items-center justify-center"
        >
          <AboutPage />
        </div>
        <div
          ref={Project}
          className="flex h-full w-full items-center justify-center"
        >
          <ProjectPage />
        </div>
        <div
          ref={Contact}
          className="flex h-full w-full items-center justify-center"
        >
          <ContactPage />
        </div>
      </div>
    </>
  );
};

export default MainSection;
