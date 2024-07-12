import { ProjectItems } from "@/utils/ProjectManu";
import Image from "next/image";
import { useState } from "react";
import Modal from "./ui/Modal";
import { motion } from "framer-motion";
import HearderSection from "./ui/HearderSection";

const ProjectPage = () => {
  const [nextItems, setNextItems] = useState(6);
  const [items, setItems] = useState(ProjectItems);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMore = () => {
    setNextItems((prev) => prev + 3);
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
        <HearderSection title="Project" Description="Thanks for visiting the portfolio. Check out my projects."/>
            
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setItems(ProjectItems)}
            className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-7 py-2 font-medium shadow-lg shadow-yellow-700 ring ring-yellow-700"
          >
            <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
            <span className="relative">All</span>
          </button>
          <button
            onClick={() => filterItem("Nextjs")}
            className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-5 py-2 font-medium shadow-lg shadow-yellow-700 ring ring-yellow-700"
          >
            <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
            <span className="relative">Next js</span>
          </button>
          <button
            onClick={() => filterItem("web")}
            className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-5 py-2 font-medium shadow-lg shadow-yellow-700 ring ring-yellow-700"
          >
            <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
            <span className="relative">JavaScritp</span>
          </button>
          <button
            onClick={() => filterItem("Webflow")}
            className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-5 py-2 font-medium shadow-lg shadow-yellow-700 ring ring-yellow-700"
          >
            <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
            <span className="relative">Webflow</span>
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items?.slice(0, nextItems)?.map((info, id) => (
            <div
              key={id}
              className="group relative z-10 overflow-hidden rounded-lg shadow-2xl shadow-yellow-500/20"
            >
              <Image
                className="h-60 w-full rounded-lg transition-transform duration-500 group-hover:scale-105 dark:opacity-70"
                src={info.img}
                alt="image"
                width={500}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
              <div className="absolute bottom-0 left-0 right-0 h-0 overflow-hidden bg-black bg-opacity-75 transition-all duration-300 group-hover:h-full">
                <div className="absolute left-0 right-0 top-4 flex justify-center text-2xl text-white">
                 {info.name}
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-white">
                  <a
                    href={info.path}
                    target="_blank"
                    className="overflow-hidden rounded-lg px-6 py-2 shadow-lg shadow-yellow-700 ring ring-yellow-700 transition-all duration-300 ease-in"
                  >
                    View Project
                  </a>
                  <button
                    onClick={() => showModalHandler(info.id)}
                    className="overflow-hidden rounded-lg px-6 py-2 text-white shadow-lg shadow-yellow-700 ring ring-yellow-700 transition-all duration-300 ease-in"
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
