import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
    } catch (err) {
      setError(true); r
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (error) {
    return (
      <p className="text-center mt-10 text-xl font-bold text-red-500">
        User not found (JSONPlaceholder API only supports IDs 1 - 10)
      </p>
    );
  }

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6 mt-10">

      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-500">@{user.username}</p>
      </div>

      {/* BASIC INFO */}
      <div className="space-y-2 border-t pt-4">
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Website:</span> {user.website}</p>
      </div>

      {/* ADDRESS*/}
      {user.address && (
        <div className="mt-4 border-t pt-4">
          <h2 className="font-semibold text-lg mb-1">Address</h2>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city} - {user.address.zipcode}</p>
          <p className="text-sm text-gray-500">
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </p>
        </div>
      )}

      {/* COMPANY  */}
      {user.company && (
        <div className="mt-4 border-t pt-4">
          <h2 className="font-semibold text-lg mb-1">Company</h2>
          <p className="font-semibold">{user.company.name}</p>
          <p className="text-gray-600">{user.company.catchPhrase}</p>
          <p className="text-gray-500 text-sm">{user.company.bs}</p>
        </div>
      )}
      
    </div>
  );
};

export default UserDetails;
