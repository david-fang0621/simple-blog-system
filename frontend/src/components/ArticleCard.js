import React from 'react'
import { Link } from 'react-router-dom'
import * as timeago from 'timeago.js'

export default function ArticleCard({article}) {
  return (
    <div className="article-card">
        <div className="rating">{article.attributes.rating}</div>
        <div className="title-section">
            <h2>{article.attributes.title}</h2>
            <small>{timeago.format(article.attributes.publishedAt)}</small>
        </div>
        {article.attributes.categories.data.map((category) => (
        <small key={category.id}>{category.attributes.name}</small>
        ))}
        <p>{article.attributes.body.substring(0, 200)}...</p>
        <Link to={`/details/${article.id}`}>Read more</Link>
    </div>
  )
}
