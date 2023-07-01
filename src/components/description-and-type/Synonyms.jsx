import useGlobal from "../../context/useGlobal"

const Synonyms = () => {
  const { currentQueryData } = useGlobal();
  const { meanings } = currentQueryData;
  //
  return (
    <div className="w-full flex flex-wrap justify-start items-center gap-6 mt-6 tab:mt-10">
      <h3 className="text-base font-normal text-lightGray tab:text-xl">
        Synonyms
      </h3>
      {meanings[0]?.synonyms.map((syn,i) => {
        return (
          <p className="text-base text-purple font-bold tab:text-xl" key={i}>
            {syn},{" "}
          </p>)
      })} 
    </div>
  );
};

export default Synonyms;
