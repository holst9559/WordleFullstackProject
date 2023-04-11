import React, { useState } from "react";

export default function MenuButton() {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState();
  const [checked, setChecked] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  async function handleForm() {
    /*
    const res = await fetch("http://localhost:5173/api/settings", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: { value, checked },
    });

    const data = await res.json();

    console.log(data);
    */
  }
  return (
    <>
      <button className="fixed top-3 left-3 hover:opacity-50">
        <img
          className="w-14 "
          src="../src/assets/settings.png"
          onClick={toggleModal}
        />
      </button>

      {modal && (
        <div className="fixed inset-0 flex justify-center tiems-center bg-opacity-30 backdrop-blur-sm">
          <div className=""></div>
          <div className="p-2 mt-32 rounded-xl w-2/5 h-2/5 bg-white">
            <h1 className="text-center font-semibold text-6xl text-gray-700 pt-5">
              Settings
            </h1>
            <div className="text-center p-7">
              <form>
                <div>
                  <label
                    className="text-3xl text-gray-700 p-2"
                    htmlFor="word-length">
                    Word Length
                  </label>
                  <select
                    className="mr-2 border-2 border-gray-700 rounded-xl h-10 w-10 text-gray-700 font-semibold text-2xl"
                    id="word-length"
                    onChange={(e) => setValue(e.target.value)}>
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
              </form>
            </div>
            <div className="text-center pt-16">
              <button
                className="border-2 text-4xl p-1 mr-2 bg-gray-700 text-white rounded-2xl shadow-2xl hover:opacity-50"
                type="submit"
                onClick={handleForm}>
                Save
              </button>

              <button
                className="border-2 text-4xl p-1 ml-2 bg-gray-700 text-white rounded-2xl shadow-2xl hover:opacity-50"
                onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
