const Shimmer = () => {
  return (
    <>
      <div className="w-[1350px] flex flex-wrap justify-start ml-[200px] pt-4 gap-4">
        {Array(16)
          .fill("")
          .map((e,index) => (
            <>
              <div className="w-64 h-[240px] ml-[60px]  bg-slate-200 "
              key={index}>
              </div>
            </>
          ))}
      </div>
    </>
  );
};
export default Shimmer;
