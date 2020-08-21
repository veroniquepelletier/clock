import React from "react";
import { Jumbotron } from "react-bootstrap";

import Clocks from "./views/clocks/Clocks";

function App() {
  return (
    <Jumbotron>
      Synchronized Clocks
      <Clocks initialDate={new Date()}></Clocks>
    </Jumbotron>
  );
}

export default App;
