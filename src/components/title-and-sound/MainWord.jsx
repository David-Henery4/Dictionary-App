import useGlobal from "../../context/useGlobal";

const MainWord = () => {
  const { currentQueryData } = useGlobal();
  //
  return (
    <div>
      <h1 className="text-darkGray mb-3 text-3xl font-bold tab:text-[64px] tab:mb-8">
        {currentQueryData?.word}
      </h1>
      <p className="text-purple font-normal text-lg leading-6 tab:text-2xl">
        {currentQueryData?.phonetic}
      </p>
    </div>
  );
}

export default MainWord