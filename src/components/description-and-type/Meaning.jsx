import useGlobal from "../../context/useGlobal";

const Meaning = () => {
  const { currentQueryData } = useGlobal();
  const { meanings } = currentQueryData;
  //
  return (
    <div>
      <h3 className="mb-4 text-base text-lightGray font-normal tab:mb-6 tab:text-xl">
        Meaning
      </h3>
      <ol className="flex flex-col justify-start items-start gap-3">
        {meanings[0]?.definitions?.map((mean, i) => {
          return (
            <li
              className="list-inside relative before:w-[5px] before:h-[5px] before:absolute before:bg-purple before:rounded-full before:top-3 before:left-0 pl-5"
              key={i}
            >
              <p className="text-[15px] font-normal leading-[24px] text-darkGray dark:text-white tab:text-lg">
                {mean?.definition}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Meaning;
