import { useState } from "react";
import {SearchIcon} from "../../assets/images"
import useGlobal from "../../context/useGlobal";

const SearchInput = () => {
  const [isQueryInvalid,setIsQueryInvalid] = useState(false)
  const { fetchUserQuery } = useGlobal();
  const [searchValue,setSearchValue] = useState("")
  //
  const handleCheckQueryBeforeSubmit = (query) => {
    if (query.length <= 0) setIsQueryInvalid(true)
    if (query.length > 0) {
      setIsQueryInvalid(false)
      fetchUserQuery(searchValue)
    }
  }
  //
  return (
    <div className="w-full relative">
      <input
        type="text"
        name="search"
        id="search"
        className={`text-base font-bold text-darkGray bg-offWhite rounded-2xl w-full p-3 outline-none smTab:p-4 tab:px-6 tab:py-5 tab:text-xl ${
          isQueryInvalid ? "border border-red" : "border-none"
        }`}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {isQueryInvalid && <p className="absolute text-red left-0 -bottom-5 text-xs">Whoops, can’t be empty…</p>}
      <SearchIcon
        className="stroke-purple absolute top-1/2 right-3 -translate-y-1/2 hover:cursor-pointer"
        onClick={() => handleCheckQueryBeforeSubmit(searchValue)}
      />
    </div>
  );
}

export default SearchInput