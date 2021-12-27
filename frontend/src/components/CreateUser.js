import React, { Component } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(input: { name: $name, email: $email }) {
      user {
        id
        name
        email
        postsCount
      }
      errors
    }
  }
`;

function CreateUser() {
  const state = {
    name: "",
    email: "",
  };

  const [createUserMutation, { data, loading, error }] =
    useMutation(CREATE_USER);

  const onSubmit = (e, createUser) => {
    e.preventDefault();
    createUser({ variables: { name: "", email: "" } });
  };

  return (
    <div className="lg:fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
      <form
        className="lg:px-8 pt-2 pb-2"
        onSubmit={(e) => onSubmit(e, createUserMutation)}
      >
        <div className="lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6">
          <h4 className="font-bold lg:pr-4">Create new user</h4>
          <div className="lg:pr-4">
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              value={state.name}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div class="lg:pr-4">
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              value={state.email}
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
