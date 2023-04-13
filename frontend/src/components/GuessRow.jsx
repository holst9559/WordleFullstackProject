export default function GuessRow({ testResponse }) {
  return (
    <div className="board-row row flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-1">
      {testResponse.map((res, index) => {
        const { letter, result } = res;
        return (
          <div
            key={index}
            className={`letter h-16 w-16 border-2  text-white text-center text-5xl tile-${result}`}>
            {letter.toLocaleUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
