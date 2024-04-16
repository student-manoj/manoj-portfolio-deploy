import { ProjectItem } from "@/utils/AllTypePortfolio";
import { roboto } from "@/utils/FontType";
import { ProjectItems } from "@/utils/ProjectManu";
import Image from "next/image";
import { useState } from "react";
import Modal from "./ui/Modal";
import { motion } from "framer-motion";
// import { CustamLink } from "./Navbar";

// const allCatValues = [
//   ...new Set(ProjectItems.map((curElem) => curElem.category)),

//   "all",
// ];

const ProjectPage = () => {
  const [nextItems, setNextItems] = useState(4);
  const [items, setItems] = useState(ProjectItems);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMore = () => {
    setNextItems((prev) => prev + 4);
  };

  const showModalHandler = (id: any) => {
    setShowModal(true);
    setActiveID(id);
  };

  const filterItem = (category: any) => {
    const updatadItem = ProjectItems.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatadItem);
  };

  // console.log(seiectTad);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -60 },
          hidden: { opacity: 0, y: 0 },
        }}
        className="containere"
      >
        <div className="mt-20 flex justify-center text-5xl font-bold">
          <div className="tracking-[0.20em]">Project</div>
        </div>
        <div className="mt-5 flex items-center justify-center text-yellow-700">
          <hr className="w-72 text-yellow-700" />
        </div>

        {/* ================ Cat-Button start ================ */}

        <div className="sm: mt-14 flex justify-center gap-4 lg:justify-end">
          <button
            onClick={() => setItems(ProjectItems)}
            className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-3 py-2 font-medium shadow-lg shadow-yellow-700 ring ring-yellow-700"
          >
            <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
            <span className="relative">All</span>
          </button>
          <button
            onClick={() => filterItem("uiUx")}
            className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-3 py-2 font-medium shadow-lg shadow-yellow-700 ring ring-yellow-700"
          >
            <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
            <span className="relative">UI/UX Design</span>
          </button>
          <button
            onClick={() => filterItem("web")}
            className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-3 py-2 font-medium shadow-lg shadow-yellow-700 ring ring-yellow-700"
          >
            <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
            <span className="relative">Web Design</span>
          </button>
        </div>

        {/* ================ Cat-Button end ================ */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {items?.slice(0, nextItems)?.map((info, id) => (
            <div
              key={id}
              className="group relative z-10 rounded-lg bg-black/40 p-1"
            >
              <figure>
                <Image
                  className="w-full rounded-lg md:w-[280px] lg:w-[230px]"
                  src={info.img}
                  alt=""
                  width={200}
                  height={400}
                  priority
                />
              </figure>
              <div className="absolute left-0 top-0 z-[5] hidden h-full w-full rounded-[8px] bg-purple-600 bg-opacity-40 group-hover:block">
                <div className="flex h-full w-full items-center justify-center">
                  <button
                    onClick={() => showModalHandler(info.id)}
                    className="rounded-xl bg-slate-800 px-4 py-2 text-white duration-200 ease-in hover:bg-slate-900"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={loadMore}
            className="-ring-offset-4 group relative overflow-hidden rounded-lg px-3 py-2 shadow-lg shadow-yellow-700 ring ring-yellow-700"
          >
            <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
            <span className="relative">Load More</span>
          </button>
        </div>
        {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
      </motion.div>
    </>
  );
};

export default ProjectPage;
