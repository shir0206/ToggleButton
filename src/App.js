import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [toggleState, setToggleState] = useState(false);

  function toggle() {
    setToggleState((toggleState) => {
      return !toggleState;
    });
  }

  return (
    <>
      <h1>{toggleState.toString()}</h1>
      <div
        className={"switch " + (toggleState ? "on" : "off")}
        onClick={toggle}
      />
    </>
  );
}
