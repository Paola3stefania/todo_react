import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import MainList from "./components/MainList";
import Footer from "./components/Footer";

import {
  startDemo,
  getLocalStorageObject,
  handleSubmit,
  appKeys,
} from "./utils/demo";

//* the App needs to know all the todo to pass it to
//* the Footer for the COUNTER and to the MainList for Render them

// *TODO -- rouer fot every page of the footer on click
// *TODO __ headaer input onchange sets new value to local

function App() {
  // elaborates de lists.
  startDemo();

  const arrayObjectKeys = appKeys();

  return (
    <div className="app-container">
      <Header handleSubmit={handleSubmit} />
      <BrowserRouter>
        {arrayObjectKeys.map((appKey) => (
          <Route
            key={appKey.id}
            exact
            path={appKey.path}
            render={(routeProps) => (
              <>
                <MainList
                  {...routeProps}
                  {...getLocalStorageObject(appKey.stringKey)}
                  handleSubmit={handleSubmit}
                />
                <Footer {...{ ...getLocalStorageObject(appKey.stringKey) }} />
              </>
            )}
          />
        ))}
      </BrowserRouter>
    </div>
  );
}

export default App;
