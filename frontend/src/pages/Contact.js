import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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

export default function Contact() {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [createContactMessage, { loading, error }] = useMutation(
    CREATE_CONTACT_MESSAGE
  );
  const handleSubmit = e => {
    e.preventDefault();
    createContactMessage({
      variables: { name, email, message },
      onCompleted: () => {
        navigate("/");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      {error && <p className="form-error">{error.message}</p>}
      <div className="input-element">
        <label htmlFor="name">Name:</label>
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
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          rows={6}
          value={message}
          placeholder="Type your message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        Send
      </button>
    </form>
  );
}
