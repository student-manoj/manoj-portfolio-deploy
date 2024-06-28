import Image from "next/image";
import logo from "../../public/Logo.png";
import ThemeSwitch from "./ui/ThemeSwitch";
import { motion } from "framer-motion";

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="h-24 w-full">
        <div className="container">
          <div className="flex items-center justify-between lg:py-6">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <div className="">
                  <Image
                    src={logo}
                    alt=""
                    width={500}
                    height={500}
                    priority
                    className="h-auto w-28 "
                  />
                </div>
              </motion.div>
            </Link>

            <div className="mr-20">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
