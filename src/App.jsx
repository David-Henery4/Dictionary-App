import {
  SearchAndSettings,
  TitleAndSound,
  DescriptionAndType,
  ErrorPage,
} from "./sections";
import { LoadingSpinner } from "./components";
import useGlobal from "./context/useGlobal";

function App() {
  const { currFont, isLoading, isError } = useGlobal();
  //
  return (
    <main
      className={`grid w-full min-h-[100svh] grid-cols-mob pt-6 pb-20 smTab:grid-cols-tab tab:pt-16 tab:pb-28 bg-white dark:bg-black ${currFont?.fontValue}`}
    >
      <div className="grid col-start-2 col-end-12 w-full grid-cols-mob content-start max-w-[736px] mx-auto smTab:grid-cols-tab ">
        <SearchAndSettings />
        {isError ? (
          <ErrorPage />
        ) : (
          <>
            {!isLoading && (
              <>
                <TitleAndSound />
                <DescriptionAndType />
              </>
            )}
            {isLoading && <LoadingSpinner />}
          </>
        )}
      </div>
    </main>
  );
}

export default App;
