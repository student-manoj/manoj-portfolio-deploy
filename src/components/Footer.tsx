import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import SocialIcon from "./ui/SocialIcon";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "../../public/Logo.png";
import project1 from "../../public/project1.jpg";
const Footer = () => {
  return (
    <>
      <div className="mt-12 bg-yellow-500/20">
        <div className="containere">
          <div className="grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center">
            <div className="flex flex-col gap-6">
              <Image src={Logo} alt="" className="h-34 w-44" />
              <p className="">
                Hello I am Creative Front-end Designer and Front-end Developer.
                i am working in Html, CSS, Javascript, React.js, Next.js,
                Tailwind.CSS and TypeScript.
              </p>
              <SocialIcon />
            </div>
            <div className="">
              <h3 className="text-2xl">Explore Link</h3>
              <div className="flex flex-col gap-3 py-6">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl">Latest Project</h3>
              <div className="mt-7">
                <div className="grid grid-cols-3 gap-3 pb-4">
                  <div className="col-span-1">
                    <Image src={project1} alt="" />
                  </div>
                  <div className="col-span-2">
                    <div className="text-base font-semibold">
                      New Dental Care project
                    </div>
                    <div className="">05 Apr 2024</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <Image src={project1} alt="" />
                  </div>
                  <div className="col-span-2">
                    <div className=" font-semibold">
                      New Dental Care project
                    </div>
                    <div className="">05 Apr 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl">Get In Touch</h3>

              <div className="mt-3">
                <div className="flex items-center gap-1 py-3 font-semibold">
                  <span className="rounded-full bg-yellow-600 p-2 shadow-inner shadow-white">
                    <AiTwotonePhone className="h-5 w-5" />
                  </span>
                  <span className="ml-3">+91 9091418682</span>
                </div>
                <div className="flex items-center gap-1 py-3 font-semibold">
                  <span className="rounded-full bg-yellow-600 p-2 shadow-inner shadow-white">
                    <AiOutlineMail className="h-5 w-5" />
                  </span>
                  <span className="ml-3">manoj02biswas@gmail.com</span>
                </div>
                <div className="flex items-center gap-1 py-3 font-semibold">
                  <span className="rounded-full bg-yellow-600 p-2 shadow-inner shadow-white">
                    <IoLocationOutline className="h-5 w-5" />
                  </span>
                  <span className="ml-3">West Bengal, Kalkata, india</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        Copyright 2023 developed by Manoj - All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
