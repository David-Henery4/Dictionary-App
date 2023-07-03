import useGlobal from "../../context/useGlobal";


const MainType = () => {
  const { currentQueryData } = useGlobal();
  const {meanings} = currentQueryData
  //
  return (
    <div className="w-full flex justify-center items-center gap-4 mb-4 tab:mb-10">
      <h2 className="text-lg font-bold italic tab:text-2xl text-darkGray dark:text-white">
        {meanings[0]?.partOfSpeech}
      </h2>
      <div className="w-full h-[1px] bg-veryLightGray dark:bg-gray"></div>
    </div>
  );
}

export default MainType