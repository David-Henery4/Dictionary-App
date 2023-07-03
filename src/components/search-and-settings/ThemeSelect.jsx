import { MoonIcon } from "../../assets/images";
import useGlobal from "../../context/useGlobal";

const ThemeSelect = () => {
  const { isThemeToggled, setIsThemeToggled } = useGlobal();
  //
  return (
    <div className="flex justify-center items-center gap-3 tab:gap-5">
      <div
        className={`w-11 h-6 rounded-xl relative hover:cursor-pointer ${
          isThemeToggled ? "bg-purple" : "bg-lightGray"
        }`}
        onClick={() => {
          setIsThemeToggled(!isThemeToggled);
        }}
      >
        <div
          className={`absolute top-1/2 left-0 transition-all -translate-y-1/2  w-4 h-4 bg-white rounded-full ${
            isThemeToggled ? "translate-x-[25px]" : "translate-x-[3px]"
          }`}
        ></div>
      </div>
      <MoonIcon className={`${isThemeToggled ? "stroke-purple" : "stroke-lightGray"}`} />
    </div>
  );
};

export default ThemeSelect;
