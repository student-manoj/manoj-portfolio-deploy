import { SocialIconData } from "@/utils/AllTypePortfolio";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiTwitterLine } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";

const SocialIconData: SocialIconData[] = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/profile.php?id=100035671867586",
    icon: <BiLogoFacebook />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/manoj0212__/",
    icon: <BiLogoInstagram />,
  },
  { name: "Telegram", path: "/#", icon: <LiaTelegramPlane /> },
  { name: "Twitter", path: "/#", icon: <RiTwitterLine /> },
  { name: "Whatsapp", path: "/#", icon: <FaWhatsapp /> },
];

const SocialIcon = () => {
  const router = useRouter();
  const iconPathName = router.pathname;

  return (
    <>
      <div className="flex items-center gap-x-5 text-xl ">
        {SocialIconData.map((Links, index) => {
          return (
            <Link
              className={`${
                Links.path === iconPathName && ""
              } group relative flex items-center rounded-3xl border border-yellow-500 p-1 shadow-md  shadow-yellow-500 transition-all duration-300 hover:text-purple-700 dark:bg-black`}
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
