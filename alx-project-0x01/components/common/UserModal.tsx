import React, { useState } from "react";
import { UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  // handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form); // pass data back to parent
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // clicking the overlay closes the modal
    >
      <form
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside the form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Add User</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder="Website"
          className="w-full mb-4 p-2 border rounded"
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
