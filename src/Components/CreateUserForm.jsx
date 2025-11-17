import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const CreateUserForm = ({onClose}) => {
  return (
    <form className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
  

  {/* Modal Box */}
  <div className="relative bg-white p-6 rounded-xl shadow-lg w-[350px] ">
    <div className='space-y-3'>
        <CloseIcon onClick={onClose} className='float-right'/>
      <div>
        <h1 className='font-semibold'>Name:</h1>
        <input 
          type="text" 
          placeholder='Enter your name' 
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <h1 className='font-semibold'>Email:</h1>
        <input 
          type="text" 
          placeholder='abc123@xyz.com' 
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <h1 className='font-semibold'>Phone:</h1>
        <input 
          type="number" 
          placeholder='Your Mobile Number' 
          className="w-full border p-2 rounded"
        />
      </div>

      <button 
        
        type="button"
        className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Submit
      </button>
    </div>
  </div>
</form>

  )
}

export default CreateUserForm
