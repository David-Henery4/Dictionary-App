import { useEffect, useState } from "react";
import useGlobal from "../../context/useGlobal";

const MainWord = () => {
  const { currentQueryData } = useGlobal();
  const { phonetics } = currentQueryData;
  const [textSample,setTextSample] = useState("")
  //
  useEffect(() => {
    const findFirstText = phonetics.find((phon) => phon.text);
    setTextSample(findFirstText?.text)
  }, [currentQueryData])
  //
  return (
    <div>
      <h1 className="text-darkGray mb-3 text-3xl font-bold tab:text-[64px] tab:mb-8 dark:text-white">
        {currentQueryData?.word}
      </h1>
      <p className="text-purple font-normal text-lg leading-6 tab:text-2xl">
        {textSample}
      </p>
    </div>
  );
}

export default MainWord