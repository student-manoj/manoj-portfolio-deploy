import { ProjectItems } from "@/utils/ProjectManu";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Modal = ({ activeID, setShowModal }: any) => {
  const projectss1 = ProjectItems.find((projectss) => projectss.id == activeID);

  const projectAll = projectss1!;

  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className="fixed left-0 top-10 z-10 h-full w-full bg-opacity-40 backdrop-blur"
      >
        <div className="">
          <div className="fixed left-1/2 top-80 z-20 max-w-[400px] -translate-x-1/2 -translate-y-1/2 transform rounded-[5px] bg-yellow-500 p-3 backdrop-blur-3xl">
            <Image
              src={projectAll.img}
              alt=""
              width={300}
              height={500}
              priority
              className="h-auto w-full"
            />
            <div className="text-xl font-bold text-slate-950">
              {projectss1?.title}
            </div>
            <div className="w-full">{projectss1?.description}</div>
            <button className="round-[3px] leading-0 absolute right-[-2rem] top-[-2rem] flex h-[1.8rem] w-[w-1.8rem] cursor-pointer items-center justify-center text-4xl">
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
