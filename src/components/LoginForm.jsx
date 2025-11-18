import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if users exist in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const loggedUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (loggedUser) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
      navigate("/doctor-list");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>

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
