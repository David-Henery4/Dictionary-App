import useGlobal from "../context/useGlobal";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";

const ErrorPage = () => {
  const { errorMsg } = useGlobal();
  return (
    <section className="col-start-2 col-end-12 pt-32 grid place-items-center text-center">
      <BsFillEmojiSmileUpsideDownFill className="text-purple w-16 h-16" />
      <h2 className="mt-11 mb-6 font-bold text-xl text-darkGray dark:text-white">
        {errorMsg?.title}
      </h2>
      <p className="text-lightGray font-normal text-lg leading-6">
        {`${errorMsg?.message} ${errorMsg?.resolution}`}
      </p>
    </section>
  );
}

export default ErrorPage