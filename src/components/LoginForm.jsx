import { Link } from "react-router-dom";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login with: ${form.email} / ${form.password}`);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          Login
        </button>
      </form>

      {/* Forgot password + Register links */}
      <div className="flex flex-col mt-4 text-sm space-y-2">
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password?
        </Link>
        <Link to="/user-register" className="text-blue-600 hover:underline">
          User Register
        </Link>
        <Link to="/doctor-register" className="text-blue-600 hover:underline">
          Doctor Register
        </Link>
      </div>
    </div>
  );
}
