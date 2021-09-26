import React, { useEffect, useState, useCallback, useContext } from "react";
import Loading from "../UI/Loading";
import SavedNews from "./SavedNews/SavedNews";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./News.module.css";
import Modal from "../Modal/Modal";
import NewsContext from "../../store/news-context";
import { Fragment } from "react/cjs/react.production.min";

const News = (props) => {
  const ctx = useContext(NewsContext);
  const [articles, setArticles] = useState([]);
  const [savedArticlesState, setSavedArticlesState] = useState([]);
  const modalIsOpen = props.modalIsOpen;

  const getNews = useCallback(() => {
    fetch("http://localhost:8080/news")
      .then((res) => res.json())
      .then((res) => setArticles(res));
  });

  const getSavedNews = useCallback(() => {
    fetch("http://localhost:8080/getSavedNews")
      .then((res) => res.json())
      .then((res) => setSavedArticlesState(res));
  }, [savedArticlesState]);

  const saveNewsHandler = useCallback((article) => {
    ctx.setIsLoading(true);

    fetch("http://localhost:8080/saveNews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: article.title,
        content: article.content,
        description: article.description,
      }),
    }).then((res) => {
      ctx.setIsLoading(false);
    });
  }, []);

  function deleteSavedHandler(articleId) {
    fetch(`http://localhost:8080/deleteSavedNews/${articleId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  useEffect(() => {
    getNews();
    getSavedNews();
  }, [getSavedNews, saveNewsHandler]);

  return (
    <Fragment>
      {ctx.isLoading && (
        <Modal>
          <Loading />
        </Modal>
      )}

      {modalIsOpen && (
        <Modal onCloseModal={props.onCloseModal}>
          <ul className={styles["saved-articles-list"]}>
            {savedArticlesState.map((article) => {
              return (
                <li className={styles["saved-article-list-item"]}>
                  <SavedNews
                    key={article._id}
                    savedArticles={savedArticlesState}
                    article={article}
                    onDeleteSavedNews={deleteSavedHandler}
                  />
                </li>
              );
            })}
          </ul>
        </Modal>
      )}
      <ul className={styles["news-list"]}>
        {articles.map((article) => {
          return (
            <li className={styles["item-box"]}>
              <NewsItem
                key={article._id}
                article={article}
                onSaveNews={saveNewsHandler}
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default News;
