import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          articles {
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
      }
    }
  }
`;

export default function Category() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error to fetch the data.</p>;
  return <div>
    <h2>{ data.category.data.attributes.name }</h2>
    {data.category.data.attributes.articles.data.map((article) => (
        <div key={article.id} className="article-card">
          <div className="rating">{article.attributes.rating}</div>
          <h2>{article.attributes.title}</h2>
          {article.attributes.categories.data.map((category) => (
            <small key={category.id}>{category.attributes.name}</small>
          ))}
          <p>{article.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${article.id}`}>Read more</Link>
        </div>
      ))}
  </div>;
}
