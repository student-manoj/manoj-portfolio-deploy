import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

const AllPageHeroSection = (props:any) => {
    return (
        <>
     <div className="bg-[url('/videoSectionimg.png')]">
        <div className="bg-black/5">
          <div className="flex flex-col justify-center items-center text-white py-36">
            <h2 className="text-5xl font-semibold tracking-[0.20em]">{props.title}</h2>
            <ul className="flex items-center justify-center gap-2 pt-8">
              <Link href="/">Home</Link>
              <FaAngleLeft className="text-yellow-600"/>
              <li>{props.pageName}</li>
            </ul>
          </div>
        </div>
      </div>  
        </>
    );
}

export default AllPageHeroSection;