import {SearchIcon} from "../../assets/images"

const SearchInput = () => {
  return (
    <div className="w-full">
      <input type="text" name="search" id="search" />
      <SearchIcon className="stroke-purple"/>
    </div>
  );
}

export default SearchInput