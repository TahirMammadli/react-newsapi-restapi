import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./SavedNews.module.css";

const SavedNews = (props) => {
  const article = props.article;
  return (
    <Fragment>
      <h1>
        <a className={styles.title} href={`/articles/`}>
          {article.title}
        </a>
      </h1>
      <h3>{article.description}</h3>
      <p>{article.content}</p>
      <button onClick={() => props.onDeleteSavedNews(article._id)}>Delete from saved</button>
    </Fragment>
  );
};

export default SavedNews;
