import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      data {
        id
        attributes {
          title
          body
          rating
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default function Article() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(ARTICLE, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error to fetch the data.</p>;

  return (
    <div className="article-card">
      <div className="rating">{data.article.data.attributes.rating}</div>
      <h2>{data.article.data.attributes.title}</h2>
      {data.article.data.attributes.categories.data.map((category) => (
        <small key={category.id}>{category.attributes.name}</small>
      ))}
      <p>{data.article.data.attributes.body}</p>
    </div>
  );
}
