import { SocialIconData } from "@/utils/AllTypePortfolio";
import Link from "next/link";
import { useRouter } from "next/router";

import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const SocialIconData: SocialIconData[] = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/profile.php?id=100035671867586",
    icon: <BiLogoFacebook />,
  },
  {
    name: "github",
    path: "https://github.com/student-manoj",
    icon: <FaGithub />,
  },
  {
    name: "linkedin",
    path: "https://www.linkedin.com/in/manoj-biswas-b5b57b244/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/manoj0212__/",
    icon: <BiLogoInstagram />,
  },
];

const SocialIcon = () => {
  const router = useRouter();
  const iconPathName = router.pathname;

  return (
    <>
      <div className="flex flex-wrap gap-3 text-xl ">
        {SocialIconData.map((Links, index) => {
          return (
            <Link
              className={`${
                Links.path === iconPathName && ""
              } group relative flex items-center rounded-3xl border border-yellow-500 p-2 shadow-md  shadow-yellow-500 transition-all duration-300 hover:text-purple-700 dark:bg-black`}
              key={index}
              href={Links.path}
            >
              <div className="absolute -right-3 hidden pb-20 lg:group-hover:flex">
                <div className="relative flex items-center rounded-sm border bg-black/40 p-2 text-purple-950 dark:border-white dark:bg-white">
                  <div className="text-[12px] font-semibold capitalize leading-none">
                    {Links.name}
                  </div>
                </div>
              </div>
              <div className="">{Links.icon}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SocialIcon;
