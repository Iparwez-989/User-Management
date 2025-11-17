import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import CreateUserForm from './CreateUserForm'

const Userlist = () => {
    const [users,setUsers] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const fetchUser = async ()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
        // console.log(res.data)       

    }
    useEffect(()=>{
        fetchUser();
    },[])
  return (
    <div>
        <div className='flex justify-between items-center p-4 bg-gray-500'>
            <div className='font-bold font-sans'>USER MANAGEMENT APPLICATION</div>
            <div><button onClick={() => setOpenModal(true)} className='bg-white p-3 rounded-lg cursor-pointer hover:bg-green-200 font-semibold font-serif'>Add New User</button></div>
        </div>
        
    <div className='border-2'>
         <UserCard data={users} />
    </div>
    {openModal && (
    <CreateUserForm onClose={() => setOpenModal(false)} />
  )}
    </div>
  )
}

export default Userlist
