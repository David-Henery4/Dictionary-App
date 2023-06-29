import {
  Logo,
} from "../assets/images";
import {FontSelect, ThemeSelect, SearchInput} from "../components"
import useGolbal from "../context/useGlobal";

const SearchAndSettings = () => {
  const {} = useGolbal()
  //
  return (
    <section className="w-full col-start-2 col-end-12 mb-6 tab:mb-11">
      <div className="flex justify-between items-center mb-6 tab:mb-14">
        <Logo />
        <div className="flex justify-center items-center gap-3 smTab:gap-8 tab:gap-14">
          <FontSelect/>
          <ThemeSelect/>
        </div>
      </div>
      <SearchInput/>
    </section>
  );
};

export default SearchAndSettings;
