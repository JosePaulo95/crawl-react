// pages/Users.tsx
import React from "react";
import { UserCard } from "../sections/users/UserCard";
import { useUsers } from "../sections/users/useUsers";

export function Users() {
  const users = useUsers();

  return (
    <div>
      <h2>Current users</h2>
      {users.map((user) => (
        <UserCard key={user.name} user={user} />
      ))}
    </div>
  );
}
