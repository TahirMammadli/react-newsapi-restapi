import React, { useEffect, useState, useCallback } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Navbar from './components/Navbar/Navbar'
import News from "./components/News/News";
import SingleArticle from "./Pages/SingleArticle/SingleArticle";
import { Route } from "react-router";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
    
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  console.log('app js')
  return (
    <Fragment>
      <Navbar onOpenModal={openModalHandler} onCloseModal={closeModalHandler} />
      <News modalIsOpen={modalIsOpen} onCloseModal={closeModalHandler} />
      <Route path="/articles/:articleId">
        <SingleArticle />
      </Route>
    </Fragment>
  );
}

export default App;
