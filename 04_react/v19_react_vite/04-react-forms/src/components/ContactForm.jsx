import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: user.fullName,
      email: user.email,
      message: user.message,
    };
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl py-4 font-semibold">Contact Form</h1>
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="fullName" className="mb-3">
          Full Name:
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          autoComplete="off"
          placeholder="John Doe"
          value={user.fullName}
          onChange={handleInputChange}
          required
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 mb-3"
        />
        <label htmlFor="email" className="my-3">
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
        <label htmlFor="message" className="my-3">
          Message:
        </label>
        <textarea
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 mb-2 h-40"
          placeholder="I wanted to express..."
          value={user.message}
          name="message"
          onChange={handleInputChange}
        ></textarea>
        <button
          className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded focus:outline-none focus:bg-blue-700 mt-2 cursor-pointer"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
