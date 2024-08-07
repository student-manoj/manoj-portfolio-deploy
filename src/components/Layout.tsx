import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Loder from "./ui/Loder";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoder = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 3000);
  };

  return (
    <>
      <div className="">
        {showContent && (
          <>
            <div className="bg-white text-black duration-300 dark:bg-black dark:text-white">
              <Navbar />
              {children}
              <Footer />
            </div>
          </>
        )}
        <Loder isLoading={isLoading} setIsLoading={handleLoder} />
      </div>
    </>
  );
};

export default Layout;
