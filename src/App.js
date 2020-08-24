import React from "react";
import { Jumbotron } from "react-bootstrap";

import Clocks from "./views/clocks/Clocks";

function App() {
  return (
    <Jumbotron style={{ minHeight: "30rem" }}>
      Synchronized Clocks
      <Clocks initialDate={new Date()}></Clocks>
    </Jumbotron>
  );
}

export default App;
