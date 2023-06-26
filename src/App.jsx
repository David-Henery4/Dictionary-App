import { useState } from "react";
import {SearchAndSettings, TitleAndSound, DescriptionAndType} from "./sections"


function App() {
  const [fontList,setFontList] = useState([
    {
      id: 1,
      fontName: "",
      fontValue: ""
    },
    {
      id: 2,
      fontName: "",
      fontValue: ""
    },
    {
      id: 3,
      fontName: "",
      fontValue: ""
    },
  ])
  //
  return (
    <main className="grid w-full h-[100svh] grid-cols-mob content-start py-6">
      <SearchAndSettings />
      <TitleAndSound/>
      <DescriptionAndType/>
    </main>
  );
}

export default App;
