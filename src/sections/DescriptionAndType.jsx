import nounMeaning from "../testing-data/nounMeaning";

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
        <h3 className="mb-4">Meaning</h3>
        <ol className="flex flex-col justify-start items-start gap-3">
          {nounMeaning.map((mean) => {
            return (
              <li className="list-disc list-inside" key={mean?.id}>{mean?.meaning}</li>
            )
          })}
        </ol>
      </div>
    </section>
  );
};

export default DescriptionAndType;
