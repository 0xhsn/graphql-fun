import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  {
    users {
      id
      name
      email
    }
  }
`;

function Users({ selectUser }) {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return "loading...";
  if (error) return `error: ${error.message}`;

  return (
    <div>
      {data.users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <br/>
        </div>
        
      ))}
    </div>
  );
}

export default Users;
