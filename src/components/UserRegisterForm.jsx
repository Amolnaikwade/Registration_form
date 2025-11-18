import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "./UserRegisterForm.css";

export default function UserRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    middleName: "",
    surname: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.surname) newErrors.surname = "Surname is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.dob) newErrors.dob = "Date of Birth is required";

    if (!form.password) newErrors.password = "Password is required";
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password))
      newErrors.password = "Must include at least one special character";

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === form.email)) {
      alert("Email already registered");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="user-register-bg">
      <div className="user-register-card">
        <h2 className="form-title">User Registration</h2>
        <form onSubmit={handleSubmit} className="user-form-grid">
          
          {/* Name */}
          <div className="form-control name-field">
            <label>Name *</label>
            <input name="name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Middle Name */}
          <div className="form-control middle-field">
            <label>Middle Name</label>
            <input name="middleName" value={form.middleName} onChange={handleChange} />
          </div>

          {/* Surname */}
          <div className="form-control surname-field">
            <label>Surname *</label>
            <input name="surname" value={form.surname} onChange={handleChange} />
            {errors.surname && <p className="error">{errors.surname}</p>}
          </div>

          {/* Email */}
          <div className="form-control email-field">
            <label>Email *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="form-control phone-field">
            <label>Phone No *</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* Date of Birth */}
          <div className="form-control dob-field">
            <label>Date of Birth *</label>
            <input type="date" name="dob" value={form.dob} onChange={handleChange} />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          {/* Password */}
          <div className="form-control password-field password-wrapper">
            <label>Password *</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
}
