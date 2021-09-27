import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import MainList from "./components/MainList";
import Footer from "./components/Footer";

import { startDemo, getLocalStorageObject, handleSubmit } from "./utils/demo";

//* the App needs to know all the todo to pass it to
//* the Footer for the COUNTER and to the MainList for Render them

// *TODO -- rouer fot every page of the footer on click
// *TODO __ headaer input onchange sets new value to local

function App() {
  // elaborates de lists.
  startDemo();

  return (
    <div className="app-container">
      <Header handleSubmit={handleSubmit} />
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <>
              <MainList
                {...routeProps}
                {...getLocalStorageObject("task-todos")}
                handleSubmit={handleSubmit}
              />
              <Footer {...getLocalStorageObject("task-todos")} />
            </>
          )}
        />
        <Route
          path="/active"
          exact
          render={(routeProps) => (
            <>
              <MainList
                {...routeProps}
                {...getLocalStorageObject("task-active")}
                handleSubmit={handleSubmit}
              />
              <Footer {...getLocalStorageObject("task-active")} />
            </>
          )}
        />
        <Route
          path="/completed"
          exact
          render={(routeProps) => (
            <>
              <MainList
                {...routeProps}
                {...getLocalStorageObject("task-completed")}
                handleSubmit={handleSubmit}
              />
              <Footer {...getLocalStorageObject("task-completed")} />
            </>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
