import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const CreateUserForm = ({ onClose, userData, onUpdateUser, onAddUser }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setForm({
      id: userData?.id || "",
      name: userData?.name || "",
      email: userData?.email || "",
      phone: userData?.phone || "",
    });
  }, [userData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-xl shadow-lg w-[350px]">
        <div className="space-y-3">
          <CloseIcon onClick={onClose} className="float-right cursor-pointer" />

          <div>
            <h1 className="font-semibold">Name:</h1>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <h1 className="font-semibold">Email:</h1>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <h1 className="font-semibold">Phone:</h1>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              userData ? onUpdateUser(form) : onAddUser(form);
            }}
            className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            {userData ? "Update" : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateUserForm;
