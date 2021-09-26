import React from 'react';
const NewsContext = React.createContext({
    isLoading: false,
    setIsLoading: () => {}
})

export default NewsContext;
