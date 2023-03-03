import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";

const REGISTER_USER = gql`
  mutation registerUser($name: String!, $email: String!, $password: String!) {
    register(input: { username: $name, email: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
        confirmed
        blocked
        role {
          name
          type
        }
      }
    }
  }
`;

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { loading, error }] = useMutation(REGISTER_USER);
  const handleSubmit = (e) => {
    e.preventDefault();
    register({
      variables: { name, email, password },
      onCompleted: () => {
        navigate("/");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Resiger</h1>
      {error && <p className="form-error">{error.message}</p>}
      <div className="input-element">
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
        <Link to="/login">Already have an account?</Link>
      </div>
      <button type="submit" disabled={loading}>
        Register
      </button>
    </form>
  );
}
