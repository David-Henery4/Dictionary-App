import { useEffect, useState } from "react";
import {PlayIcon} from "../../assets/images"
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
    <div className="w-12 h-12 tab:w-[75px] tab:h-[75px]">
        <PlayIcon className="w-full h-full" onClick={handlePlayAudio}/>
    </div>
  );
}

export default SoundSample