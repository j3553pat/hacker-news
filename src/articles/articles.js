import React from 'react';


const Article = (props) => {
    const {title, author, num_comments, created_at, url} =props
    const formattedDate = new Date(created_at).toLocaleDateString()
    const comments = num_comments
    const writer = author
    const site = url

return (
    <div className='articlesContainer'>
        <a className='articleLink'
            href={site}
            target ="_blank"
            rel="noreferrer"
           >{title}</a>
        <div>
            By {writer} | {comments} comments | {formattedDate}
        </div>
        <hr />
    </div>
)
}

export default Article;