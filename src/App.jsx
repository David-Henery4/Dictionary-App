import {NewWindowIcon,ArrowDownIcon, Logo, MoonIcon, PlayIcon, SearchIcon} from "./assets/images";
import {SearchAndSettings} from "./sections"


function App() {
  return (
    <main className="grid w-full h-[100svh] grid-cols-mob content-start py-6">
      <SearchAndSettings/>
      <section></section>
      <section></section>
    </main>
  );
}

export default App;
