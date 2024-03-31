import { roboto } from "@/utils/FontType";
import Link from "next/link";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import SocialIcon from "./ui/SocialIcon";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="pt-14">
        <div className="bg-black/20 pt-12 dark:bg-black">
          <div className="containere">
            <div className="justify-between gap-10 lg:flex">
              <div className="w-full sm:w-3/4">
                <div className="mb-5 gap-2 text-2xl font-medium leading-10 md:text-3xl lg:w-[500px]">
                  Do you want to make beautiful products
                </div>
                <div className="">
                  <button className="flex items-center rounded-lg bg-yellow-500 px-4 py-2 font-medium duration-500 ease-in hover:bg-white/70 hover:font-medium">
                    <Link
                      href="/contact"
                      className="flex items-center gap-1 font-semibold shadow-xl shadow-yellow-800 duration-300 hover:text-black"
                    >
                      <AiOutlineMail /> Contact Me
                    </Link>
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col sm:w-1/2">
                <div className="flex items-center gap-1 py-3 font-semibold">
                  <span className="rounded-full bg-yellow-600 p-2 shadow-inner shadow-white">
                    <AiTwotonePhone className="h-5 w-5" />
                  </span>
                  <span className="ml-3 text-lg">+91 9091418682</span>
                </div>
                <div className="flex items-center gap-1 py-3 font-semibold">
                  <span className="rounded-full bg-yellow-600 p-2 shadow-inner shadow-white">
                    <AiOutlineMail className="h-5 w-5" />
                  </span>
                  <span className="ml-3 text-lg"> manoj02biswas@gmail.com</span>
                </div>
                <div className="flex items-center gap-1 py-3 font-semibold">
                  <span className="rounded-full bg-yellow-600 p-2 shadow-inner shadow-white">
                    <IoLocationOutline className="h-5 w-5" />
                  </span>
                  <span className="ml-3 text-lg">
                    West Bengal, Kalkata, india
                  </span>
                </div>
                <div className={`${roboto.className} flex items-center gap-9`}>
                  <span className="py-5 text-lg font-medium">Follow me :</span>
                  <SocialIcon />
                </div>
              </div>
            </div>
            <div
              className={`${roboto.className} flex justify-center py-6`}
            ></div>
          </div>
          <div className="mt-12 bg-slate-100 py-3 dark:bg-white/10">
            <div className="containere">
              <div className="flex items-center justify-center sm:justify-between">
                <div className="hidden sm:block">
                  <div className="flex items-center gap-3">
                    <Image
                      src={logo}
                      alt=""
                      width={60}
                      height={60}
                      priority
                      className="h-auto w-auto"
                    />
                  </div>
                </div>
                <div className="">
                  Copyright 2023 developed by Manoj - All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
