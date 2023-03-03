import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";

const CREATE_CONTACT_MESSAGE = gql`
  mutation CreateContactMessage(
    $name: String!
    $email: String!
    $message: String!
  ) {
    createContactMessage(
      data: { name: $name, email: $email, message: $message }
    ) {
      data {
        id
        attributes {
          name
          email
          message
          publishedAt
        }
      }
    }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createContactMessage, { loading, error }] = useMutation(
    CREATE_CONTACT_MESSAGE
  );
  const handleSubmit = e => {
    e.preventDefault();
    createContactMessage({
      variables: { email, password },
      onCompleted: () => {
        navigate("/");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
      {error && <p className="form-error">{error.message}</p>}
      <div className="input-element">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-element">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-element">
        <Link to="/register">Create an account?</Link>
      </div>
      <button type="submit" disabled={loading}>
        Login
      </button>
    </form>
  );
}
