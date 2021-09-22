import React from "react";

import Header from "./components/Header";
import MainList from "./components/MainList";
import Footer from "./components/Footer";

import { toDoS } from "./utils/toDoExamples";

//* the App needs to know all the todo to pass it to
//* the Footer for the COUNTER and to the MainList for Render them

// *TODO -- rouer fot every page of the footer on click
// *TODO __ headaer input onchange sets new value to local

function App() {
  const toDoList = toDoS;

  // text
  const textList = toDoList.map((obj) => obj.text);
  console.log(textList);

  return (
    <div className="app-container">
      <Header />
      <MainList {...textList} />
      <Footer />
    </div>
  );
}

export default App;
