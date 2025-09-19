import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered: ${form.name}, ${form.email}`);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name input with icon */}
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-500 text-lg" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Email input with icon */}
        <div className="relative">
          <MdEmail className="absolute left-3 top-3 text-gray-500 text-lg" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Password input with icon */}
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-500 text-lg" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      {/* Already registered link */}
      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
