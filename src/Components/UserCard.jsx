import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CreateUserForm from './CreateUserForm';
const UserCard = ({data}) => {
    const [openModal,setOpenModal] = useState(false)
    return (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Users</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((user) => (
              <div
                key={user.id}
                className="flex justify-between p-4 bg-white shadow rounded-xl border hover:shadow-lg transition"
              >
                <div>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-gray-600 text-sm">Email: {user.email}</p>
                    <p className="text-gray-500 text-sm mt-1">Phone: {user.phone}</p>
                </div>
                
                <div className='flex flex-col justify-between'>
                    <button onClick={()=>setOpenModal(true)} className='cursor-pointer'><EditIcon /></button>
                    <button className='cursor-pointer'><DeleteIcon /></button>
                </div>
                
              </div>
              
            ))}
          </div>
          {openModal && (
                    <CreateUserForm onClose={() => setOpenModal(false)} />
                    )}
        </div>
        
      );
}

export default UserCard
