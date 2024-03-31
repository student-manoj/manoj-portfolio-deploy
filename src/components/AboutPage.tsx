import Image from "next/image";
import myImg3 from "../../public/myImg3.png";
import { roboto } from "@/utils/FontType";
import { motion } from "framer-motion";

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
        <div className="mt-20 flex justify-center text-5xl font-bold">
          <div className="tracking-[0.20em]">About</div>
        </div>
        <div className="mt-2 flex items-center justify-center text-yellow-700">
          <hr className="w-72 text-yellow-700" />
        </div>
        <div className="mt-14 flex flex-col justify-between gap-8 md:flex-row md:gap-14 lg:flex-row lg:gap-20">
          <div className="absolute ml-8 mt-4 h-96 w-[300px] rounded-3xl border border-yellow-300 md:w-[260px]  lg:w-[310px]" />
          <div className="z-50 flex h-96 justify-center md:w-[450px] lg:w-[550px]">
            <Image
              src={myImg3}
              alt=""
              width={250}
              height={250}
              className="h-auto w-auto"
              priority
            />
          </div>
          <div className="text-wrap mt-10 flex w-full flex-col items-center gap-3 text-center md:items-start md:text-start lg:items-start lg:text-start ">
            <h1 className="text-xl font-bold tracking-widest">My Details</h1>
            <p className="font-medium leading-6 sm:pl-10 sm:pr-4 ">
              Hello, My Name Is{" "}
              <span className="text-yellow-600">Manoj Biswas</span>. I Am a
              Forntend Designer & Developer And UI/UX Designer.
              <br />
              Iam a Fresher I Have No Exprience Working Any Company. I Always
              like To Work With My Integrity. I Always Learn Something New In
              This Field So i Like To Work In This Field.
            </p>
            <h1 className="text-xl font-bold tracking-widest">Education</h1>
            <p className="flex font-medium leading-5 sm:pl-10 sm:pr-4">
              Complated Full Stuck Web Development course from (cit) computer
              insttitute. Complated My Graduation From Basirhat Collage
            </p>
            <div className="mt-5">
              <a href="manojCV.pdf" download>
                <button className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-full px-3 py-3 shadow-lg shadow-yellow-700 ring ring-yellow-700">
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
