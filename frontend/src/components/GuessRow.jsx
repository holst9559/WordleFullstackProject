export default function GuessRow({ currWord }) {
  return (
    <div className="board-row row flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-2 mb-2 ">
      {currWord.map((res, index) => {
        const { letter, result } = res;
        return (
          <div
            key={index}
            className={`letter h-16 w-16 border-2  text-white text-center text-5xl tile-${result}`}
            id={result}>
            {letter.toLocaleUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
