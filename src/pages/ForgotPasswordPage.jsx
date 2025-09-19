import Header from "../components/Header";
import { useState } from "react";
import { MdEmail } from "react-icons/md"; // 👈 email icon

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email input with icon */}
            <div className="relative">
              <MdEmail className="absolute left-3 top-3 text-gray-500 text-lg" />
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
