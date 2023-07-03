import useGlobal from "../../context/useGlobal";

const SecondaryType = () => {
  const { currentQueryData } = useGlobal();
  const { meanings } = currentQueryData;
  //
  return (
    <div className="w-full mt-8 tab:mt-10">
      <div className="w-full flex justify-center items-center gap-4 mb-4 tab:mb-10">
        <h2 className="text-lg font-bold italic tab:text-2xl text-darkGray dark:text-white">
          {meanings[1]?.partOfSpeech}
        </h2>
        <div className="w-full h-[1px] bg-veryLightGray dark:bg-gray"></div>
      </div>
      {/**/}
      <div>
        <h3 className="mb-4 text-base text-lightGray font-normal tab:mb-6">
          Meaning
        </h3>
        <ol className="flex flex-col justify-start items-start gap-3">
          {meanings[1]?.definitions?.map((mean, i) => {
            return (
              <li
                className="list-inside relative before:w-[5px] before:h-[5px] before:absolute before:bg-purple before:rounded-full before:top-3 before:left-0 pl-5 inline-flex flex-col justify-start items-start gap-3"
                key={i}
              >
                <p className="text-[15px] font-normal leading-[24px] text-darkGray tab:text-lg dark:text-white">
                  {mean?.definition}
                </p>
                <p className="text-lightGray text-[15px] font-normal leading-[24px] tab:text-lg">
                  {mean?.example}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default SecondaryType