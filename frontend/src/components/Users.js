import React from "react";
import { useQuery, gql } from "@apollo/client";
import UserAvatar from "./UserAvatar";
import CreateUser from "./CreateUser";

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

  function updateUsers(cache, { data: { createUser }}) {
    const { users } = cache.readQuery({ query: GET_USERS });
    cache.writeQuery({
      query: GET_USERS,
      data: { users: users.concat([createUser.user]) },
    });
  }

  return (
    <div className="flex flex-wrap items-center pb-16">
      {data.users.map((user) => (
        <div
          key={user.id}
          className="lg:w-1/3 w-full p-4 text-center"
          onClick={selectUser.bind(this, user)}
        >
          <UserAvatar user={user} />
        </div>
      ))}
      <CreateUser onCreateUser={updateUsers} />
    </div>
  );
}

export default Users;
