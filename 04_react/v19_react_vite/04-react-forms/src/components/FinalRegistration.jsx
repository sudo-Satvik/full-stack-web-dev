import { useState } from "react";

const FinalRegistration = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
    };
    console.log(formData);
  };
  return (
    <div className="flex items-center justify-center mt-10 bg-gray-900 text-white flex-col">
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleFormSubmit}
      >
        <div className="flex gap-2">
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="off"
              placeholder="Enter your First Name"
              value={user.firstName}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="off"
              placeholder="Enter your Last Name"
              value={user.lastName}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={user.email}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
            value={user.password}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            autoComplete="off"
            placeholder="Enter your Phone Number"
            value={user.phoneNumber}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="termsAccepted"
          >
            <input
              type="checkbox"
              id="termsAccepted"
              name="isChecked"
              className="mr-2"
            />
            I accept the{" "}
            <span className="text-blue-400 font-semibold">
              terms and conditions
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded focus:outline-none focus:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default FinalRegistration;
