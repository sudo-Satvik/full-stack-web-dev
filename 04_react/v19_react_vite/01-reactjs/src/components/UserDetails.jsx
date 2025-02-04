import { useState } from "react";

const UserDetails = () => {
  const userData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@gmail.com",
    },
  ];
  const [users, setUsers] = useState(userData);

  return (
    <>
      <h1 className="text-4xl font-semibold text-center text-white py-5">
        User Data using useState()
      </h1>
      <ul className="flex flex-col gap-5 text-left ml-10">
        {userData.map((user) => (
          <li key={user.id} className="text-white">
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
        <hr className="my-10 text-gray-500"/>
      <ul className="flex flex-col gap-5 text-left ml-10">
        {users.map((user) => (
          <li key={user.id} className="text-white">
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserDetails;
