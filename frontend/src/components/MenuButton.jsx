import React, { useState } from "react";

export default function MenuButton() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="fixed top-3 left-3">
        <img
          className="w-14 "
          src="../src/assets/settings.png"
          onClick={toggleModal}
        />
      </button>

      {modal && (
        <div className="fixed inset-0 flex justify-center tiems-center bg-opacity-30 backdrop-blur-sm">
          <div className=""></div>
          <div className="p-2 mt-32 rounded-xl w-2/5 h-3/5 bg-white">
            <h1 className="text-center font-semibold text-5xl text-gray-700">
              Settings
            </h1>
            <div className="text-center">
              <button
                className="border-2 text-4xl p-1 bg-gray-700 text-white rounded-2xl"
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
