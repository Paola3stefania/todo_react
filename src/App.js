import React from "react";
// import classNames from "classnames";

import Header from "./components/Header";
import MainList from "./components/MainList";
import Footer from "./components/Footer";
// import classNames from "classnames";

// the root has a background
import { saveIntoLocal, getLocalStorage } from "./utils/saveIntoClient";

const LOCAL_STORAGE_KEY = "testing-todos";

// the App uses the props but it not delivers them to the children
// only the App has the key

function App(props) {
  saveIntoLocal(LOCAL_STORAGE_KEY, props);

  const arrayObjetos = JSON.parse(getLocalStorage(LOCAL_STORAGE_KEY));
  const toDoList = Object.values(arrayObjetos);
  // text
  const textList = toDoList.map((obj) => obj.text);

  return (
    <div className="app-container">
      <Header />
      <MainList {...textList} />
      <Footer />
    </div>
  );
}

export default App;
