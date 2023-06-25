import {
  Logo,
} from "../assets/images";
import {FontSelect, ThemeSelect, SearchInput} from "../components"

const SearchAndSettings = () => {
  return (
    <section className="w-full col-start-2 col-end-12">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex justify-center items-center">
          <FontSelect/>
          <ThemeSelect/>
        </div>
      </div>
      <SearchInput/>
    </section>
  );
};

export default SearchAndSettings;
