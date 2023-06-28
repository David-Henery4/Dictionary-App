import{ArrowDownIcon} from "../../assets/images";

const FontSelect = () => {
  return (
    <div className="flex justify-center items-center gap-4 tab:gap-[18px]">
      {/* Might change to input */}
      <p className="text-sm font-bold text-darkGray tab:text-lg">Sans Serif</p>
      <ArrowDownIcon />
    </div>
  );
}

export default FontSelect