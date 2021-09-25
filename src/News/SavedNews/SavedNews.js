import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./SavedNews.module.css";

const SavedNews = (props) => {
  return (
    <Fragment>
      <h1>
        <a className={styles.title} href={`/articles/`}>
          {props.article.title}
        </a>
      </h1>
      <h3>{props.article.description}</h3>
      <p>{props.article.content}</p>
      <button>Delete from saved</button>
    </Fragment>
  );
};

export default SavedNews;
