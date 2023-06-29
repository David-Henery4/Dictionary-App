import { useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [currFont,setFont] = useState("font-inter");
  const [fontList, setFontList] = useState([
    {
      id: 1,
      fontName: "Sans Serif",
      fontValue: "font-inter",
    },
    {
      id: 2,
      fontName: "Serif",
      fontValue: "lora",
    },
    {
      id: 3,
      fontName: "Mono",
      fontValue: "inconsolata",
    },
  ]);
  const [isFontSelectOpen, setIsFontSelectOpen] = useState(false);
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
        setFont,
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