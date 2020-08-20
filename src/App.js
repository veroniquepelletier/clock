import React from "react";
import { Jumbotron } from "react-bootstrap";

import { AnalogClock, DigitalClock } from "./components";

function App() {
  return (
    <Jumbotron>
      Synchronized Clocks
      <AnalogClock></AnalogClock>
      <DigitalClock></DigitalClock>
    </Jumbotron>
  );
}

export default App;
