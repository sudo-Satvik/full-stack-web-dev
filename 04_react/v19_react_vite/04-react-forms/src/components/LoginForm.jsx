import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: user.email,
      password: user.password,
    };
    console.log(formData);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl py-4 font-semibold">Login Form</h1>
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="email" className="mb-3">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="johndoe@google.com"
          value={user.email}
          onChange={handleInputChange}
          required
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 mb-5"
        />
        <label htmlFor="email" className="mb-3">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="••••••••"
          value={user.password}
          onChange={handleInputChange}
          required
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded focus:outline-none focus:bg-blue-700 mt-7 cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
