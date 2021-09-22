import React from "react";
// import classNames from "classnames";

import Header from "./components/Header";
import MainList from "./components/MainList";
import Footer from "./components/Footer";
// import classNames from "classnames";

// the root has a background

function App() {
  return (
    <div className="app-container">
      <Header />
      <MainList />
      <Footer />
    </div>
  );
}

export default App;
