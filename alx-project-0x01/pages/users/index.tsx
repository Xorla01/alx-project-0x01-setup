import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserCardProps } from "@/interfaces";

interface UsersPageProps {
  users: UserCardProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

// ✅ Default export must be a React component
export default Users;

// ✅ getStaticProps stays as a named export
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserCardProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
}
