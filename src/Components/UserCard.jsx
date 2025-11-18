import React from "react";
import Card from "./Card";

const UserCard = ({ data, setSelectedUser, setOpenModal, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((user) => (
        <Card
          key={user.id}
          user={user}
          onEdit={() => {
            setSelectedUser(user);
            setOpenModal(true);
          }}
          onDelete={() => onDelete(user.id)}  
        />
      ))}
    </div>
  );
};

export default UserCard;
