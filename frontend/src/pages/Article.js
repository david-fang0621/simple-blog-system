import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Article() {
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/articles/' + id)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error to fetch the data.</p>

    console.log(data)

  return (
    <div key={data.id} className="article-card">
        <div className="rating">{data.attributes.rating}</div>
        <h2>{data.attributes.title}</h2>
        <small>Caregory</small>
        <p>{data.attributes.body}</p>
    </div>
  )
}
