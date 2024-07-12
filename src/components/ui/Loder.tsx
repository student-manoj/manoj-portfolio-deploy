import { useEffect } from "react";

const Loder = ({ isLoading, setIsLoading }: any) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 3000);
  }, [setIsLoading]);

  return (
    <>
      {isLoading && (
        <div className="flex h-screen items-center justify-center overflow-hidden bg-black text-white">
          <div className="loader bg-cover bg-clip-text text-7xl uppercase text-transparent">
            Loading....
          </div>
        </div>
      )}
    </>
  );
};

export default Loder;
