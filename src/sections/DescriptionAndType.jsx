import {MainType, Meaning, Synonyms, SecondaryType, Source} from "../components"
import useGlobal from "../context/useGlobal";

const DescriptionAndType = () => {
    const { currentQueryData } = useGlobal();
    const { meanings } = currentQueryData;
  //
  return (
    <section className="w-full col-start-2 col-end-12">
      <MainType/>
      <Meaning/>
      <Synonyms/>
      {meanings[1] && <>
        <SecondaryType/>
        <Source/>
      </>}
    </section>
  );
};

export default DescriptionAndType;
