import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

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
                publishedAt
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
        <ArticleCard key={article.id} article={article} />
      ))}
  </div>;
}
