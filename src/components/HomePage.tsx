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
      <div className="containere pt-8">
        <div className=" justify-betweensm:flex-col -z-50 gap-36 md:flex md:flex-row lg:flex">
          {/* ================ Hero Left start ================ */}
          <div className="mt-8 flex w-full flex-col items-center gap-5 text-center md:basis-1/2 md:items-start md:text-start lg:items-start lg:text-start">
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
              className={`${roboto.className} font-[700] leading-9 sm:text-4xl sm:leading-10`}
            >
              <span className="text-5xl">
                I am <span className="text-yellow-600">Manoj Biswas</span>{" "}
              </span>
              <br />
              <div className="h-7 py-2 text-3xl font-medium">{text}</div>
            </motion.div>
            <div className={`${roboto.className} mt-4 flex items-center gap-6`}>
              <motion.button
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.05 }}
                className="flex items-center rounded-lg bg-black/70 shadow-lg shadow-yellow-700 ease-in dark:bg-black"
              >
                <Link
                  href="/contact"
                  className="group relative flex items-center overflow-hidden rounded-lg px-3 py-2 font-medium text-white shadow-inner shadow-yellow-600"
                >
                  <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
                  <span className="relative flex items-center gap-2">
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
                  className="group relative flex items-center overflow-hidden rounded-lg px-3 py-2 font-medium text-white shadow-inner shadow-yellow-600"
                >
                  <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
                  <span className="relative">See Project</span>
                </Link>
              </motion.button>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.65 }}
              className={`${roboto.className} mt-4 flex gap-2 font-medium leading-6 sm:pl-10 sm:pr-10`}
            >
              <span className="text-yellow-500">
                <RiAppsLine />
              </span>
              Creative front-end Developer with experience.Proficient in Html,
              CSS, Javascript, React.js, Tailwind.CSS, Next.js and TypeScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.95 }}
              className={`${roboto.className}  flex gap-9`}
            >
              <span className="h-7 text-base font-medium">Follow me :</span>
              <SocialIcon />
            </motion.div>
          </div>
          {/* ================ Hero left end ================ */}
          {/* ================ my img  start ================ */}
          <div className="">
            <MyImg />
          </div>

          {/* ================ my img  end ================ */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
