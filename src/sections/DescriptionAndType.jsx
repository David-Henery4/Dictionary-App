import nounMeaning from "../testing-data/nounMeaning";
import verbMeaning from "../testing-data/verbMeaning";

const DescriptionAndType = () => {
  //
  return (
    <section className="w-full col-start-2 col-end-12">
      {/* MAIN TYPE */}
      <div className="w-full flex justify-center items-center gap-4 mb-4">
        <h2 className="text-lg font-bold italic">noun</h2>
        <div className="w-full h-[1px] bg-veryLightGray"></div>
      </div>
      {/*meaning*/}
      <div>
        <h3 className="mb-4 text-base text-lightGray font-normal">Meaning</h3>
        <ol className="flex flex-col justify-start items-start gap-3">
          {nounMeaning.map((mean) => {
            return (
              <li
                className="list-inside relative before:w-[5px] before:h-[5px] before:absolute before:bg-purple before:rounded-full before:top-3 before:left-0 pl-5"
                key={mean?.id}
              >
                <p className="text-[15px] font-normal leading-[24px] text-darkGray">
                  {mean?.meaning}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
      {/* Synonyms */}
      <div className="w-full flex justify-start items-center gap-6 mt-6">
        <h3 className="text-base font-normal text-lightGray">Synonyms</h3>
        <p className="text-base text-purple font-bold">electronic keyboard</p>
      </div>
      {/* Secondary type */}
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
      {/* SOURCE */}
      <div className="w-full border-t border-veryLightGray mt-8 py-6">
        <h4>Source</h4>
        <a href="#">
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </div>
    </section>
  );
};

export default DescriptionAndType;
