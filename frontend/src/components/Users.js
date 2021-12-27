import React from "react";
import { useQuery, gql } from "@apollo/client";
import UserAvatar from "./UserAvatar";

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

  return(
    <div className="flex flex-wrap items-center pb-16">
      {data.users.map(user => (
        <div key={user.id} className="lg:w-1/3 w-full p-4 text-center" onClick={selectUser.bind(this, user)}>
          <UserAvatar user={user} />
        </div>
      ))}
    </div>
  )
}

export default Users;
