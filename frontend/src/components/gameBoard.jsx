import GuessRow from "./GuessRow";

export default function Board({ apiResponse }) {
  return (
    <div className="board block relative bottom-12 bg-gray-800 max-h-screen max-w-screen">
      {apiResponse.map((result, index) => {
        return <GuessRow key={index} currWord={result} />;
      })}
    </div>
  );
}
