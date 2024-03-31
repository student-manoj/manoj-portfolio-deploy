<!-- const [isVisible, setIsVisible] = useState<boolean>(false);

const goToBtn = () => {
window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const listenToScroll = () => {
let heightToHidden: number = 250;

    const winScroll: number =
      window.scrollY || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

};

useEffect(() => {
window.addEventListener("scroll", listenToScroll);
return () => window.removeEventListener("scroll", listenToScroll);
}, []); -->

<!--
 export const CustamLink = ({ href, title, className = "" }: any) => {
   const router = useRouter();

   return (
     <Link href={href} className={`${className} group relative`}>
       {title}
       <span
         className={`ease absolute -bottom-0.5 left-0 inline-block h-[2px] bg-yellow-500 transition-[width] duration-500 group-hover:w-full ${
           router.asPath === href ? `w-full` : `w-0.5`
         }`}
       ></span>
     </Link>
   );
 };
 <div className={`${roboto.className}  text-xl`}>
              <CustamLink href="/#" title="Home" className="mr-5" />
              <CustamLink href="/about" title="About" className="mr-5" />
              <CustamLink href="/porject" title="Project" className="mr-5" />
              <CustamLink href="/contact" title="Contact" className="mr-5" />
            </div>  -->
