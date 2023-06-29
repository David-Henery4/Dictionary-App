import{ArrowDownIcon} from "../../assets/images";
import useGlobal from "../../context/useGlobal";

const FontSelect = () => {
  const { fontList } = useGlobal();
  //
  return (
    <div className="relative flex justify-center items-center gap-4 tab:gap-[18px] hover:cursor-pointer">
      <p className="text-sm font-bold text-darkGray tab:text-lg">Sans Serif</p>
      <ArrowDownIcon />
      {/* Dropdown */}
      <div className="absolute z-10 top-0 left-0 min-w-max p-6 bg-white rounded-2xl">
        <ul className="flex flex-col justify-start items-start gap-4">
          {fontList.map((font) => {
            return (
              <li key={font.id} className="text-base font-bold">
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