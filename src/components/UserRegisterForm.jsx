import { useState } from "react";

export default function UserRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    middleName: "",
    surname: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  // Handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate required fields
  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.surname) newErrors.surname = "Surname is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.dob) newErrors.dob = "Date of Birth is required";
    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      sessionStorage.setItem("userForm", JSON.stringify(form));
      alert("User data saved in sessionStorage ✅");
    }
  };

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <div>
          <label className="block font-medium">Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Middle Name */}
        <div>
          <label className="block font-medium">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={form.middleName}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Surname */}
        <div>
          <label className="block font-medium">Surname *</label>
          <input
            type="text"
            name="surname"
            value={form.surname}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
          {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone No *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* DOB */}
        <div>
          <label className="block font-medium">Date of Birth *</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
