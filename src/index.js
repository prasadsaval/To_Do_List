import React from "react";
import ReactDOM from "react-dom";
import "./Style1.css";
import App from "./App.jsx";
import "./List/list.css";

ReactDOM.render(<App />, document.getElementById("root"), () => {
  console.log("successfully render the react dom");
});
