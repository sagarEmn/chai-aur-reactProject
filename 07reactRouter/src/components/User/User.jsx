import React from "react";
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams() 
  return (
    <div className="text-3xl bg-gray-700 text-white p-28">
    User: {userid}
    </div>
  )
}

export default User;
