import { useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
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
    setCurrFont(fontList.find((curr) => curr.id === id))
  }
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export {
  AppContext,
  AppProvider
}