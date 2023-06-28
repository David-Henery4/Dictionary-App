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
    <main className="grid w-full min-h-[100svh] grid-cols-mob content-start pt-6 pb-20 max-w-[777px] mx-auto smTab:grid-cols-tab tab:pt-16 tab:pb-28">
      <SearchAndSettings />
      <TitleAndSound/>
      <DescriptionAndType/>
    </main>
  );
}

export default App;
