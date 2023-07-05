import useGlobal from "../../context/useGlobal";
import {NewWindowIcon} from "../../assets/images";

const Source = () => {
  const { currentQueryData } = useGlobal();
  const { sourceUrls } = currentQueryData;
  //
  return (
    <div className="w-full border-t border-veryLightGray mt-8 pt-6 tab:mt-10 tab:pt-5 flex flex-col justify-start items-start gap-3 dark:border-gray">
      <h4 className="text-sm font-normal text-lightGray">Source</h4>
      {sourceUrls?.map((srcUrls, i) => {
        return (
          <a
            key={i}
            href={`${srcUrls}`}
            className="break-all  text-sm font-normal text-darkGray inline-flex justify-start items-center gap-4 flex-wrap dark:text-white"
            target="_blank"
            rel="noreferrer"
          >
            {srcUrls}
            <NewWindowIcon />
          </a>
        );
      })}
    </div>
  );
};

export default Source;
