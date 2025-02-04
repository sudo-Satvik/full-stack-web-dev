import { useState } from "react";

const DerivedStates = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      age: 21,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      age: 45,
    },
    {
      id: 3,
      name: "Sara Smith",
      email: "sarasmith@gmail.com",
      age: 19,
    },
  ]);
  const userCount = students.length;
  const averageAge =
    students.reduce((acc, user) => acc + user.age, 0) / userCount;
  return (
    <>
      <h1 className="text-5xl text-center font-semibold py-10">
        Derived States Exampul
      </h1>
      {students.map((student) => (
        <div
          key={student.id}
          className=" items-center bg-gray-800 text-white p-10 rounded"
        >
          <p>{student.id}</p>
          <p>{student.name}</p>
          <p>{student.email}</p>
        </div>
      ))}
      <p className="text-lg text-gray-300">
        Number of users present: {userCount}
      </p>
      <p className="text-lg text-gray-300">
        Average age present user: {Math.floor(averageAge)}
      </p>
    </>
  );
};

export default DerivedStates;
