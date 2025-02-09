import { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      isChecked,
    };
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center mt-10 bg-gray-900 text-white flex-col">
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2">
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="off"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
              name="termsAccepted"
              className="mr-2"
              value={isChecked}
              onChange={() => setIsChecked(!isChecked)}
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
      <div className="text-center mt-40">
        Hi{" "}
        <span className="text-blue-500">
          {firstName} {lastName}
        </span>
        , hope you are doing good. I got your data and here it is:
        <ul>
          <li>Email ID: {email}</li>
          <li>
            Password Length<span className="text-red-500">*</span>:{" "}
            {password.length}
          </li>
          <li>Phone Number: +91 {phoneNumber}</li>
          <li>You agreed to T&C: {isChecked ? "Yes" : "No"}</li>
        </ul>
        <p className="text-sm text-gray-500 mt-20">
          *We can&apos;t disclose user&apos;s privacy
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
