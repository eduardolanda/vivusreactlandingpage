import React from "react";
import ReactVivus from "react-vivus";
import svg from "../hi.svg";
import "../App";

const Rocket = () => {
  return (
    <header className="App-header">
      <ReactVivus
        id="logo"
        option={{
          file: svg,
          animTimingFunction: "EASE",
          type: "oneByOne",
          duration: 400,
          onReady: console.log
        }}
        style={{
          margin: "auto"
        }}
        callback={console.log}
      />
    </header>
  );
};

export default Rocket;
