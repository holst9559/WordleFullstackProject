import React from "react";
import Letter from "./Letter";

export default function Board({ settings }) {
  const length = settings.wordLength;

  function renderBoard3(val) {
    return (
      <div className="row flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-1">
        <Letter letterPos={0} attemptVal={val} />
        <Letter letterPos={1} attemptVal={val} />
        <Letter letterPos={2} attemptVal={val} />
      </div>
    );
  }
  function renderBoard4(val) {
    return (
      <div className="row flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-1">
        <Letter letterPos={0} attemptVal={val} />
        <Letter letterPos={1} attemptVal={val} />
        <Letter letterPos={2} attemptVal={val} />
        <Letter letterPos={3} attemptVal={val} />
      </div>
    );
  }
  function renderBoard5(val) {
    return (
      <div className="row flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-1">
        <Letter letterPos={0} attemptVal={val} />
        <Letter letterPos={1} attemptVal={val} />
        <Letter letterPos={2} attemptVal={val} />
        <Letter letterPos={3} attemptVal={val} />
        <Letter letterPos={4} attemptVal={val} />
      </div>
    );
  }
  function renderBoard6(val) {
    return (
      <div className="row flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-1">
        <Letter letterPos={0} attemptVal={val} />
        <Letter letterPos={1} attemptVal={val} />
        <Letter letterPos={2} attemptVal={val} />
        <Letter letterPos={3} attemptVal={val} />
        <Letter letterPos={4} attemptVal={val} />
        <Letter letterPos={5} attemptVal={val} />
      </div>
    );
  }
  function renderBoard7(val) {
    return (
      <div className="row flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-1">
        <Letter letterPos={0} attemptVal={val} />
        <Letter letterPos={1} attemptVal={val} />
        <Letter letterPos={2} attemptVal={val} />
        <Letter letterPos={3} attemptVal={val} />
        <Letter letterPos={4} attemptVal={val} />
        <Letter letterPos={5} attemptVal={val} />
        <Letter letterPos={6} attemptVal={val} />
      </div>
    );
  }

  if (length === 3) {
    return (
      <div className="board bg-gray-800 max-h-screen max-w-screen mt-10 mb-20">
        {renderBoard3(0)}
        {renderBoard3(1)}
        {renderBoard3(2)}
        {renderBoard3(3)}
        {renderBoard3(4)}
        {renderBoard3(5)}
      </div>
    );
  } else if (length === 4) {
    return (
      <div className="board bg-gray-800 max-h-screen max-w-screen mt-10 mb-20">
        {renderBoard4(0)}
        {renderBoard4(1)}
        {renderBoard4(2)}
        {renderBoard4(3)}
        {renderBoard4(4)}
        {renderBoard4(5)}
      </div>
    );
  } else if (length === 5) {
    return (
      <div className="board bg-gray-800 max-h-screen max-w-screen mt-10 mb-20">
        {renderBoard5(0)}
        {renderBoard5(1)}
        {renderBoard5(2)}
        {renderBoard5(3)}
        {renderBoard5(4)}
        {renderBoard5(5)}
      </div>
    );
  } else if (length === 6) {
    return (
      <div className="board bg-gray-800 max-h-screen max-w-screen mt-10 mb-20">
        {renderBoard6(0)}
        {renderBoard6(1)}
        {renderBoard6(2)}
        {renderBoard6(3)}
        {renderBoard6(4)}
        {renderBoard6(5)}
      </div>
    );
  } else if (length === 7) {
    return (
      <div className="board bg-gray-800 max-h-screen max-w-screen mt-10 mb-20">
        {renderBoard7(0)}
        {renderBoard7(1)}
        {renderBoard7(2)}
        {renderBoard7(3)}
        {renderBoard7(4)}
        {renderBoard7(5)}
      </div>
    );
  }
}
