import verbMeaning from "../../testing-data/verbMeaning";

const SecondaryType = () => {
  return (
    <div className="w-full mt-8">
      <div className="w-full flex justify-center items-center gap-4 mb-4">
        <h2 className="text-lg font-bold italic">verb</h2>
        <div className="w-full h-[1px] bg-veryLightGray"></div>
      </div>
      {/**/}
      <div>
        <h3 className="mb-4 text-base text-lightGray font-normal">Meaning</h3>
        <ol className="flex flex-col justify-start items-start gap-3">
          {verbMeaning.map((mean) => {
            return (
              <li
                className="list-inside relative before:w-[5px] before:h-[5px] before:absolute before:bg-purple before:rounded-full before:top-3 before:left-0 pl-5 inline-flex flex-col justify-start items-start gap-3"
                key={mean?.id}
              >
                <p className="text-[15px] font-normal leading-[24px] text-darkGray">
                  {mean?.meaning}
                </p>
                <p className="text-lightGray text-[15px] font-normal leading-[24px]">
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