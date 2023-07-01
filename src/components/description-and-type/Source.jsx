import useGlobal from "../../context/useGlobal";

const Source = () => {
  const { currentQueryData } = useGlobal();
  const { sourceUrls } = currentQueryData;
  //
  return (
    <div className="w-full border-t border-veryLightGray mt-8 pt-6 tab:mt-10 tab:pt-5 flex flex-col justify-start items-start gap-3">
      <h4 className="text-sm font-normal text-lightGray">Source</h4>
      {sourceUrls?.map((srcUrls,i) => {
        return (
          <a key={i} href="#" className="break-words text-sm font-normal text-darkGray">
            {srcUrls}
          </a>
        );
      }) }
    </div>
  );
};

export default Source;
