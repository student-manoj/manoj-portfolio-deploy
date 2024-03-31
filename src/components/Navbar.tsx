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
          <div className="flex items-center justify-between py-2">
            {/* ================ logo ================ */}

            <Link href="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <Image
                  src={logo}
                  alt=""
                  width={65}
                  height={65}
                  priority
                  className="h-auto w-24 "
                />
              </motion.div>
            </Link>
            {/* ================ logo end ================ */}

            <div className="">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
