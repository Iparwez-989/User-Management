import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import CreateUserForm from './CreateUserForm';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // FETCH USERS --> GET API CALL
  const fetchUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (users.length === 0) {
    return (
      <p className="text-center mt-10 text-xl font-semibold">Loading...</p>
    );
  }

  // ADD USER --> POST API CALL
  const handleAddUser = async (newUser) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );

      setUsers([...users, res.data]); 
      setOpenModal(false);
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // UPDATE USER --> PUT API CALL
  const handleUpdateUser = async (updatedUser) => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
        updatedUser
      );

      setUsers(
        users.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );

      setOpenModal(false);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // DELETE USER --> DELETE API CALL
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error("An error occurred:", err.message);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center p-4 bg-gray-500">
        <div className="font-bold font-sans">
          USER MANAGEMENT APPLICATION
        </div>

        <button
          onClick={() => {
            setSelectedUser(null);
            setOpenModal(true);
          }}
          className="bg-white p-3 rounded-lg cursor-pointer hover:bg-green-200 font-semibold font-serif"
        >
          Add New User
        </button>
      </div>

      {/* USER CARDS */}
      <div className="mt-4 mx-2">
        <UserCard
          data={users}
          setSelectedUser={setSelectedUser}
          setOpenModal={setOpenModal}
          onDelete={handleDeleteUser}
        />
      </div>

      {/* CREATE/UPDATE MODAL */}
      {openModal && (
        <CreateUserForm
          onClose={() => setOpenModal(false)}
          userData={selectedUser}
          onAddUser={handleAddUser}
          onUpdateUser={handleUpdateUser}
        />
      )}
    </div>
  );
};

export default Userlist;
