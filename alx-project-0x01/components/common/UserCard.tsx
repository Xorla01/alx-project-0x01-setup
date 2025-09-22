import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm">@{username}</p>
      </div>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-gray-600 mb-2">
        {address.street}, {address.city}
      </p>
      <p className="text-gray-600 mb-2">{phone}</p>
      <a
        href={`http://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mb-2 block"
      >
        {website}
      </a>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Company: {company.name}</span>
        <span className="italic text-gray-400">{company.catchPhrase}</span>
      </div>
    </div>
  );
};

export default UserCard;
