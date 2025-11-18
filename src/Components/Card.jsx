import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
const Card = ({ user, onEdit, onDelete }) => {
    
    return (
      <div className="flex justify-between p-4 bg-white shadow rounded-xl border hover:shadow-lg transition">
        <div>
          <Link to={`/user/${user.id}`} className="text-lg font-semibold cursor-pointer">{user.name}</Link>
          <p className="text-gray-600 text-sm">Email: {user.email}</p>
          <p className="text-gray-500 text-sm mt-1">Phone: {user.phone}</p>
        </div>
  
        <div className="flex flex-col justify-between">
          <button onClick={() => onEdit(user)} className="cursor-pointer">
            <EditIcon />
          </button>
  
          <button onClick={()=>onDelete(user.id )} className="cursor-pointer">
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  };
  

export default Card
