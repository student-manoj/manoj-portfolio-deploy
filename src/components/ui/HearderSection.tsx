const HearderSection = (props:any) => {
    return (
        <>
         <div className="mt-20 flex flex-col items-center justify-center">
          <div className="text-5xl font-semibold tracking-[0.20em]">{props.title}</div>
          <div className="mt-2 flex items-center justify-center text-yellow-700">
            <hr className="w-72 text-yellow-700" />
          </div>
          <div className="pt-5 text-center font-medium leading-7 text-black/60 dark:text-white/60 lg:w-[550px]">
          {props.Description}
          </div>
        </div>
        </>
    );
}

export default HearderSection;