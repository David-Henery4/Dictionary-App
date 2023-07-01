import { useState } from "react";
import {SearchIcon} from "../../assets/images"
import useGlobal from "../../context/useGlobal";

const SearchInput = () => {
  const { fetchUserQuery } = useGlobal();
  const [searchValue,setSearchValue] = useState("")
  //
  return (
    <div className="w-full relative">
      <input
        type="text"
        name="search"
        id="search"
        className="text-base font-bold text-darkGray bg-offWhite rounded-2xl w-full p-3 outline-none smTab:p-4 tab:px-6 tab:py-5 tab:text-xl"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <SearchIcon className="stroke-purple absolute top-1/2 right-3 -translate-y-1/2 hover:cursor-pointer" onClick={() => {
        fetchUserQuery(searchValue)
      }}/>
    </div>
  );
}

export default SearchInput