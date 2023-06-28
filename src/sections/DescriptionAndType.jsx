import {MainType, Meaning, Synonyms, SecondaryType, Source} from "../components"

const DescriptionAndType = () => {
  //
  return (
    <section className="w-full col-start-2 col-end-12">
      <MainType/>
      <Meaning/>
      <Synonyms/>
      <SecondaryType/>
      <Source/>
    </section>
  );
};

export default DescriptionAndType;
