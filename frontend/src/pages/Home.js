import React from "react";
import { useQuery, gql } from "@apollo/client";
import ArticleCard from "../components/ArticleCard";

const ARTICLES = gql`
  query {
    articles {
      data {
        id
        attributes {
          title
          rating
          body
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
`;

export default function Home() {
  const { loading, error, data } = useQuery(ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error to fetch the data.</p>;

  return (
    <div>
      {data.articles.data.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
