import React, { useContext, useState } from "react";
//import { AppContext } from "../App";

export default function KeyInput() {
  const [key, setKey] = useState("");
  window.addEventListener("keyup", (e) => {
    e.preventDefault();
    setKey(e.target.value);
    console.log(e.target.value);
  });

  return (
    <div>
      <p id={key} className="text-white">
        {key}
      </p>
    </div>
  );
}
