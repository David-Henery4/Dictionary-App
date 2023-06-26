import { useState } from "react";
import {SearchIcon} from "../../assets/images"

const SearchInput = () => {
  const [searchValue,setSearchValue] = useState("")
  //
  return (
    <div className="w-full relative">
      <input
        type="text"
        name="search"
        id="search"
        className="bg-offWhite rounded-2xl w-full p-3 outline-none"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      />
      <SearchIcon className="stroke-purple absolute top-1/2 right-3 -translate-y-1/2 hover:cursor-pointer" />
    </div>
  );
}

export default SearchInput