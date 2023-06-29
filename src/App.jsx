import { useState } from "react";
import {SearchAndSettings, TitleAndSound, DescriptionAndType} from "./sections"
import useGlobal from "./context/useGlobal";

function App() {
  const { currFont } = useGlobal();
  //
  return (
    <main className={`grid w-full min-h-[100svh] grid-cols-mob content-start pt-6 pb-20 max-w-[817px] mx-auto smTab:grid-cols-tab tab:pt-16 tab:pb-28 ${currFont}`}>
      <SearchAndSettings />
      <TitleAndSound/>
      <DescriptionAndType/>
    </main>
  );
}

export default App;
