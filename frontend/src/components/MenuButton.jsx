import React, { useState } from "react";

export default function MenuButton({ settings, onSave, onRestart }) {
  const { wordLengthSettings, checkedSettings } = settings;
  const [modal, setModal] = useState(false);
  const [wordLength, setWordLength] = useState(3);
  const [checked, setChecked] = useState(checkedSettings ? true : false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="fixed top-3 left-5 hover:opacity-50">
        <p
          className="text-white text-3xl font-bold border-2 p-2 rounded-xl shadow-md shadow-black"
          src="/settings.png"
          onClick={toggleModal}>
          Settings
        </p>
      </button>

      {modal && (
        <div className="fixed inset-0 flex justify-center bg-opacity-30 backdrop-blur-sm">
          <div className=""></div>
          <div className="p-2 mt-32 rounded-xl w-2/5 h-2/5 bg-white">
            <h1 className="text-center font-semibold text-6xl text-gray-700 pt-5">
              Settings
            </h1>
            <div className="text-center p-7">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const settingsData = { wordLength, checked };
                  onSave(settingsData);
                  onRestart(true);
                  toggleModal();
                }}>
                <div>
                  <label
                    className="text-3xl text-gray-700 p-2"
                    htmlFor="word-length">
                    Word Length
                  </label>
                  <select
                    className="mr-2 border-2 border-gray-700 rounded-xl h-10 w-10 text-gray-700 font-semibold text-2xl"
                    id="word-length"
                    value={wordLength}
                    onChange={(e) => setWordLength(parseInt(e.target.value))}>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </select>
                </div>

                <div>
                  <label
                    className="text-3xl text-gray-700 p-2"
                    htmlFor="duplicateLetters">
                    Duplicate Letters
                  </label>
                  <input
                    className="w-6 h-6"
                    name="duplicateLetters"
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                </div>
                <div className="text-center pt-16">
                  <button
                    className="border-2 text-4xl p-1 mr-2 bg-gray-700 text-white rounded-2xl shadow-md shadow-black hover:opacity-50"
                    type="submit">
                    Save
                  </button>
                  <button
                    className="border-2 text-4xl p-1 ml-2 bg-gray-700 text-white rounded-2xl shadow-md shadow-black hover:opacity-50"
                    onClick={toggleModal}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
