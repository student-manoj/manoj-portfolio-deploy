import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { RiAppsLine } from "react-icons/ri";
import SocialIcon from "./ui/SocialIcon";
import MyImg from "./ui/MyImg";
import { roboto } from "@/utils/FontType";
import { IoHandLeftOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Front-end Designer.", "Front-end Developer.", "UI/UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="containere pb-5">
        <div className="grid place-items-center gap-6 md:grid-cols-2">
          <div className="flex w-full flex-col items-center gap-4 text-center md:basis-1/2 md:items-start md:text-start lg:items-start lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
              className={`${roboto.className} flex items-center gap-3 text-xl font-medium`}
            >
              Hello <IoHandLeftOutline />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.75 }}
              className={`${roboto.className} font-[700] leading-9 sm:text-5xl sm:leading-10`}
            >
              <i className="text-5xl xl:text-6xl">
                I am <span className="text-yellow-600">Manoj Biswas</span>{" "}
              </i>
              <br />
              <div className="h-7 py-2 text-3xl font-medium">{text}</div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.65 }}
              className={`${roboto.className} mt-7 flex gap-2 text-lg leading-8 text-black/60 dark:text-white/60 sm:pr-10`}
            >
              <span className="text-yellow-500">
                <RiAppsLine />
              </span>
              Hello I am Front-end Designer & Developer. I
              am Working in Html, CSS, Javascript, React.js, Next.js,
              Tailwind.CSS and TypeScript.
            </motion.p>

            <div className={`${roboto.className} mt-4 flex items-center gap-6`}>
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.05 }}
                className="flex items-center rounded-lg bg-black/70 shadow-lg shadow-yellow-700 ease-in dark:bg-black"
              >
                <Link
                  href="/contact"
                  className="group relative flex items-center overflow-hidden rounded-lg px-4 py-2 font-medium text-white shadow-inner shadow-yellow-600"
                >
                  <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
                  <span className="relative flex items-center gap-2 font-serif">
                    <AiOutlineMail /> Contact Me
                  </span>
                </Link>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.35 }}
                className="flex items-center rounded-lg bg-black/70 shadow-lg shadow-yellow-700 ease-in dark:bg-black"
              >
                <Link
                  href="/project"
                  className="group relative flex items-center overflow-hidden rounded-lg px-4 py-2 font-medium text-white shadow-inner shadow-yellow-600"
                >
                  <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
                  <span className="relative font-serif">See Project</span>
                </Link>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.95 }}
              className={`${roboto.className} flex items-center gap-6 lg:mt-7`}
            >
              <span className="font-serif font-medium lg:text-xl">
                Follow me :
              </span>
              <SocialIcon />
            </motion.div>
          </div>
          <div className="md:grid place-content-end hidden">
            <MyImg />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
