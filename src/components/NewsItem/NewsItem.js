import React, { Fragment } from "react";
import styles from './NewsItem.module.css'

const NewsItem = (props) => {
  return (
    <Fragment>
      <h1 className={styles.title}>{props.article.title}</h1>
      <h3 className={styles.description}>{props.article.description}</h3>
      <p>{props.article.content}</p>
      <button className={styles.button} onClick={() => props.onSaveNews(props.article)}>+ Save for later</button>
    </Fragment>
  );
};

export default NewsItem;
