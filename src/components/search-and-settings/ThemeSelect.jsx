import { MoonIcon } from "../../assets/images";

const ThemeSelect = () => {
  return (
    <div className="flex justify-center items-center gap-3 tab:gap-5">
      <div className="w-11 h-6 bg-lightGray rounded-xl relative">
        <div className="absolute top-1/2 left-0 translate-x-[3px] -translate-y-1/2  w-4 h-4 bg-white rounded-full"></div>
      </div>
      <MoonIcon />
    </div>
  );
};

export default ThemeSelect;
