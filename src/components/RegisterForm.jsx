import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Enter a valid email");
      return;
    }

    // Password validation
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password)) {
      alert("Password must include at least one special symbol");
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    if (users.some((u) => u.email === form.email)) {
      alert("Email already registered!");
      return;
    }

    // Save new user
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ Automatically log in and store in sessionStorage
    sessionStorage.setItem("currentUser", JSON.stringify(form));

    alert("Registration successful! Redirecting to Doctor List...");
    navigate("/doctor-list");
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center border rounded-lg px-3">
          <MdPerson className="text-gray-500 mr-2" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full py-2 focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border rounded-lg px-3">
          <MdEmail className="text-gray-500 mr-2" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full py-2 focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border rounded-lg px-3">
          <MdLock className="text-gray-500 mr-2" />
          <input
            type="password"
            name="password"
            placeholder="Password (must include a special character)"
            value={form.password}
            onChange={handleChange}
            className="w-full py-2 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Regis
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
