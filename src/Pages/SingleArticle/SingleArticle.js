import React, { useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router'
import styles from './SingleArticle.module.css'

const SingleArticle = () => {
    const params = useParams()
    const [articleState, setArticleState] = useState('')
    const article = {};

    const findById = useCallback(() => {
        fetch(`https://news-api-853fd-default-rtdb.firebaseio.com/news/${params}.json`)
          .then((res) => res.json())
          .then(res => console.log(res))
          

      }, []);

      useEffect(() => {
          findById();
      }, [findById])
    
    return (
        <div>
            <p>{articleState}</p>
        </div>
    )
}

export default SingleArticle
