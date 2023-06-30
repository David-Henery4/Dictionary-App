import{ArrowDownIcon} from "../../assets/images";
import useGlobal from "../../context/useGlobal";

const FontSelect = () => {
  const {
    fontList,
    currFont,
    isFontSelectOpen,
    setIsFontSelectOpen,
    handleSetCurrFont,
  } = useGlobal();
  //
  return (
    <div className="relative text-darkGray flex justify-center items-center gap-4 tab:gap-[18px] hover:cursor-pointer">
      <p
        className="text-sm font-bold tab:text-lg"
        onClick={() => setIsFontSelectOpen(!isFontSelectOpen)}
      >
        {currFont?.fontName}
      </p>
      <ArrowDownIcon />
      {/* Dropdown */}
      <div
        className={
          `absolute z-10 top-8 right-0 min-w-max p-6 pr-16 bg-white rounded-2xl shadow-selectDropdown tab:top-12 ${isFontSelectOpen ? "block" : "hidden"}`
        }
      >
        <ul className="flex flex-col justify-start items-start gap-4">
          {fontList.map((font) => {
            return (
              <li
                key={font?.id}
                className="text-base font-bold hover:text-purple"
                onClick={() => handleSetCurrFont(font?.id)}
              >
                {font?.fontName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FontSelect