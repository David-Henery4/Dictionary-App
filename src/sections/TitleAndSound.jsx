import {MainWord, SoundSample} from "../components"

const TitleAndSound = () => {
  return (
    <section className="w-full col-start-2 col-end-12 flex justify-between items-center mb-8">
      <MainWord/>
      <SoundSample/>
    </section>
  );
};

export default TitleAndSound;
