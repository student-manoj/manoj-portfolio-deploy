import Image from "next/image";
import myImg3 from "../../public/myImg1.png";
import { roboto } from "@/utils/FontType";
import { motion } from "framer-motion";
import { IconData } from "@/utils/IconData";
import HearderSection from "./ui/HearderSection";

const AboutPage = (info: any) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -60 },
          hidden: { opacity: 0, y: 0 },
        }}
        className={`${roboto.className} containere`}
      >
       <HearderSection title="About" Description="Thanks for visiting the portfolio This is the About Me."/>

        <div className="grid place-items-center gap-16 lg:grid-cols-2 mt-12">
          <div className="lg:h-[650px] lg:w-[500px] ">
            {/* <Image
              src={myImg3}
              alt=""
              width={550}
              height={550}
              className="h-full w-full"
              priority
            /> */}
            <Image
              src={myImg3}
              alt=""
              width={550}
              height={550}
              className="h-full w-full"
              priority
            />
          </div>

          <div className="flex flex-col gap-2">
            {/* <h3 className="py-6 text-3xl font-bold">
              Hello I am Web Forntend Designer & Developer Manoj Biswas
            </h3> */}
            <h1 className="text-xl font-bold tracking-widest text-yellow-600 underline">
              About Me
            </h1>
            <p className="flex flex-col gap-3 pb-3 font-medium leading-7 text-black/60 dark:text-white/60 sm:pl-10 sm:pr-2">
              <span>
                Hello, My Name is <span className="text-yellow-600"> Manoj Biswas</span>. I Am a
                Forntend Designer & Developer And UI/UX Designer.
              </span>
              <span>
                I am always try do to something new. Always like To Work With My
                Integrity. I always learn Something new in this field so i like
                to work in this field.
              </span>
            </p>
            <h1 className="text-xl font-bold tracking-widest text-yellow-600 underline">
              Education
            </h1>
            <p className="flex flex-col gap-3 pb-3 font-medium leading-5 text-black/60 dark:text-white/60 sm:pl-10 sm:pr-4">
              <li className="">Complete (H.S) from Matia High School</li>
              <li className="">Complete (B.A) from Basirhat College</li>
              <li className="">Complete Full Stack Web Developer from (CIT)</li>
            </p>
            <h1 className="text-xl font-bold tracking-widest text-yellow-600 underline">
              Skill&apos;s
            </h1>
            <div className="flex flex-wrap items-center gap-5 pb-6 sm:pl-10 sm:pr-4">
              {IconData.map((value) => (
                <div
                  key={value.id}
                  className="flex h-12 w-12 items-center justify-center rounded-full border duration-300 hover:rotate-180 hover:scale-125"
                >
                  <Image
                    src={value.img}
                    alt="icon"
                    width={500}
                    height={500}
                    className="h-6 w-6"
                  />
                </div>
              ))}
            </div>
            {/* <h1 className="text-xl font-bold tracking-widest text-yellow-600 underline">
              Skill Highlights
            </h1>
            <p className="flex flex-col gap-3 font-medium leading-5 text-black/60 dark:text-white/60 sm:pl-10 sm:pr-4">
              <li className="">Web Designer</li>
              <li className="">Web Developer</li>
              <li className="">Figma Designer</li>
              <li className="">Responsive Designer</li>
              <li className="">Creative Design</li>
            </p> */}
            <div className="mt-5">
              <a href="manojCV.pdf" download>
                <button className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-7 py-3 shadow-lg shadow-yellow-700 ring ring-yellow-700">
                  <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
                  <span className="relative">Download CV</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
