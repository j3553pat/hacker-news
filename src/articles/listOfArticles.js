import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Article from './articles'
import SearchForItem from './searchForItem'

const ArticleList = () => {
    const API = 'https://hn.algolia.com/api/v1/search?'
    const [loadArticle, setLoadArticle] = useState(true)
    const [articles, setArticles] = useState(null)


    useEffect(() => {
        getArticlesonFeed('')
    }, [])

    const getArticlesonFeed = (e) => {
        setLoadArticle(true)
        const url = `${API}${e}`
        axios.get(url)
        .then(response => response.data)
        .then(data => {
            setArticles(data.hits)
            setLoadArticle(false)
            console.log(data)
        })
    }

    const searchQueryKeyWords = (query, category) => {
        let keys = category
        if(category === 'story') {
            keys = `query=${query}&tags=story`
        } if(category === 'author') {
            keys = `tags=story,author_${query}`
        } return keys
    }

    const searchWords = (query, category) => {
        const keys = searchQueryKeyWords(query, category)
        getArticlesonFeed(keys)
    }

    return (
        <div className='container'>
            {console.log(loadArticle)}
            <div>
                <SearchForItem onSearchEvent={searchWords} />
            </div>

            {loadArticle ? <div className='loadedArticle'>
                Articles Are Loading
                </div>:
                <div> {articles.map(article => {
                    return (
                        <Article key={article.objectID} {...article} />
                    )
                })}
                </div>
                }
         </div>
    )
};


export default ArticleList