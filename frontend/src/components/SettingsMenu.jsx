import React, { useState } from "react";

export default function Modal() {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div classname="modal-content">
        <h2>Settings</h2>
      </div>
    </div>
  );
}
