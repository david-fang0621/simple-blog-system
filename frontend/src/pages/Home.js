import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const ARTICLES = gql`
  query {
    articles {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error to fetch the data.</p>;

  return (
    <div>
      {data.articles.data.map((article) => (
        <div key={article.id} className="article-card">
          <div className="rating">{article.attributes.rating}</div>
          <h2>{article.attributes.title}</h2>
          <small>Caregory</small>
          <p>{article.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${article.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
