import GuessRow from "./GuessRow";

export default function Board({ apiResponse }) {
  return (
    <div className="board bg-gray-800 max-h-screen max-w-screen mt-10 mb-20 ">
      {apiResponse.map((result, index) => {
        return <GuessRow key={index} currWord={result} />;
      })}
    </div>
  );
}
