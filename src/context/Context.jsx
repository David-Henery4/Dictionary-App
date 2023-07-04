import axios from "axios";
import { useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isThemeToggled, setIsThemeToggled] = useState(false);
  const [currentQueryData,setCurrentQueryData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError,setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState({})
  //
  const [currFont, setCurrFont] = useState({
    id: 1,
    fontName: "Sans Serif",
    fontValue: "font-inter",
  });
  const [fontList, setFontList] = useState([
    {
      id: 1,
      fontName: "Sans Serif",
      fontValue: "font-inter",
    },
    {
      id: 2,
      fontName: "Serif",
      fontValue: "font-lora",
    },
    {
      id: 3,
      fontName: "Mono",
      fontValue: "font-inconsolata",
    },
  ]);
  const [isFontSelectOpen, setIsFontSelectOpen] = useState(false);
  //
  const handleSetCurrFont = (id) => {
    setCurrFont(fontList.find((curr) => curr.id === id));
  };
  //
  const fetchUserQuery = async (query) => {
    try {
      setIsError(false);
      setIsLoading(true)
      const res = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      setCurrentQueryData(res.data[0])
      setIsLoading(false);
    } catch (error) {
      console.error(error.message)
      setErrorMsg(error.response.data);
      setIsLoading(false)
      setIsError(true)
    }
  };
  //
  useState(() => {
    fetchUserQuery("keyboard")
  })
  //
  
  //
  return (
    <AppContext.Provider
      value={{
        isFontSelectOpen,
        setIsFontSelectOpen,
        //
        fontList,
        setFontList,
        //
        currFont,
        //
        handleSetCurrFont,
        //
        fetchUserQuery,
        //
        isLoading,
        setIsLoading,
        //
        currentQueryData,
        setCurrentQueryData,
        //
        isError,
        errorMsg,
        //
        isThemeToggled,
        setIsThemeToggled,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
