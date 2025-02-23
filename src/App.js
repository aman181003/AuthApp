import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(Header, null),
    React.createElement(Content, null),
    React.createElement(Footer, null)
  );
}

export default App;
