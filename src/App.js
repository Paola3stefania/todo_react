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
  clearCompleted,
} from "./utils/demo";

//* the App needs to know all the todo to pass it to
//* the Footer for the COUNTER and to the MainList for Render them

function App() {
  return (
    <div className="app-container">
      <Header handleSubmit={handleSubmit} />
      <BrowserRouter {...appKeys}>
        {appKeys().map((appKey) => (
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
                  pageDesc={appKey.pageDescr}
                />
              </>
            )}
          />
        ))}
        <Footer
          appKeys={appKeys}
          startDemo={startDemo}
          clearCompleted={clearCompleted}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
