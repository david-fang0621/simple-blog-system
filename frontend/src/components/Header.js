import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query Categories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export default function Header() {
  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories</p>;

  return (
    <div className="header">
      <Link to="/">
        <h1>Huateng Fang</h1>
      </Link>
      <nav className="categories">
        <span>Filter articles by category:</span>
        {data.categories.data.map(category => (
          <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
        ))}
      </nav>
    </div>
  );
}
