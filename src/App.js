import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeaderRFC from "./components/HeaderRFC";
import BaiTapDanLayOut from "./components/BaiTapDanLayOut.js/BaiTapDanLayOut";
import DataBinding from "./DataBinding/DataBinding";

function App() {
  return (
    <div className="App">
      {/* <BaiTapDanLayOut /> */}
      <DataBinding />
    </div>
  );
}

export default App;
