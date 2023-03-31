import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App h-screen w-screen bg-gray-800">
      <header className="flex items-center flex-row h-20 border-b-2  bg-gray-800 opacity-90">
        <a
          className="font-bold text-6xl ml-auto mr-auto text-white p-10"
          href="/">
          WORDLE
        </a>
      </header>
      <nav className="bg-gray-800 flex items-center flex-row justify-center pt-2 opacity-90">
        <a className=" text-white text-3xl pr-6" href="/highscores">
          Highscores
        </a>
        <a className="text-white text-3xl pl-6" href="/info">
          Info
        </a>
      </nav>
      <div className="bg-gray-800 max-h-screen max-w-screen mt-10 mb-20">
        <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            K
          </div>
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            A
          </div>
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            F
          </div>
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            F
          </div>
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            E
          </div>
        </div>

        <div className="flex flex-row ml-auto mr-auto max-w-fit bg-gray-800 gap-3 mb-3">
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            K
          </div>
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            A
          </div>
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            F
          </div>
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            K
          </div>
          <div className="letter h-16 w-16 border-2  text-white text-center text-5xl">
            E
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
