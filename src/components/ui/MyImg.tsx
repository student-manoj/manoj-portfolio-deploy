import Image from "next/image";
// import myimg1 from "../../../public/myimg1.png";
import { motion } from "framer-motion";

const MyImg = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.05 }}
        className="mt-10 lg:mt-4"
      >
        <figure className="flex items-center justify-center">
          <Image
            src="/myimg1.png"
            alt=""
            width={300}
            height={300}
            className="h-auto w-auto"
            priority
          />
        </figure>
      </motion.div>
    </>
  );
};

export default MyImg;
