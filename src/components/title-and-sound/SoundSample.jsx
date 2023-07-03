import { useEffect, useState } from "react";
import { PlayIconBackup } from "../../assets/images";
import useGlobal from "../../context/useGlobal"

const SoundSample = () => {
  const { currentQueryData } = useGlobal();
  const { phonetics } = currentQueryData;
  const [audioSample,setAudioSample] = useState("")
  //
  const handlePlayAudio = () => {
    audioSample.play()
  }
  //
  useEffect(() => {
    const findFirstAudio = phonetics.find(phon => phon.audio)
    setAudioSample(new Audio(findFirstAudio?.audio));
  }, [currentQueryData])
  //
  return (
    <div className="w-12 h-12 hover:cursor-pointer tab:w-[75px] tab:h-[75px]">
      <PlayIconBackup
        className="w-full h-full fill-purple hover:scale-105"
        onClick={handlePlayAudio}
      />
    </div>
  );
}

export default SoundSample