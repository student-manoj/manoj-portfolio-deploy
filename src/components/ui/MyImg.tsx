import Image from "next/image";
import { motion } from "framer-motion";

const MyImg = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.05 }}>
        <div className="relative rounded-xl h-[480px] w-[380px] overflow-hidden shadow-2xl shadow-yellow-500/20">
          <div className="content-none absolute bg-gradient-to-r from-yellow-800 to-yellow-950 animate-spin ease-linear duration-500 w-[180px] h-[170%] -top-32 right-[30%] shadow"></div>
          <div className="content-none rounded-xl m-[2px] h-[476px] w-[376px] dark:bg-black bg-white absolute duration-300 ">
            <div className="p-4">
            <Image src="/myimg1.png" alt="image" width={300} height={300}  className="h-auto w-auto" priority />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyImg;
