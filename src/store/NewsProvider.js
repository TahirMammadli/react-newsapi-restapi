import NewsContext from "./news-context";
import React, { useState } from "react";

const NewsProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);

   

  const newsContext = {
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };
  return (
    <NewsContext.Provider value={newsContext}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;