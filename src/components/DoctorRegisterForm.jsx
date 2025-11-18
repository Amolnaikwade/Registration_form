import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorRegisterPage.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function DoctorRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    middleName: "",
    surname: "",
    email: "",
    phone: "",
    qualification: "",
    hospital: "",
    address: "",
    speciality: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.surname) newErrors.surname = "Surname is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.qualification) newErrors.qualification = "Qualification is required";
    if (!form.hospital) newErrors.hospital = "Hospital/Clinic is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.speciality) newErrors.speciality = "Speciality is required";

    if (!form.password) newErrors.password = "Password is required";
    else if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(form.password))
      newErrors.password =
        "Password must include 8+ chars, uppercase, number & special character";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
      localStorage.setItem("doctors", JSON.stringify([...storedDoctors, form]));
      alert("Doctor Registered Successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="doctor-page-bg">
      <div className="doctor-form-container">
        <h2 className="form-title">Doctor Registration</h2>

        <form onSubmit={handleSubmit} className="form-grid">

          <div className="form-control">
            <label>Name *</label>
            <input name="name" value={form.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-control">
            <label>Middle Name</label>
            <input name="middleName" value={form.middleName} onChange={handleChange} />
          </div>

          <div className="form-control">
            <label>Surname *</label>
            <input name="surname" value={form.surname} onChange={handleChange} />
            {errors.surname && <p className="error">{errors.surname}</p>}
          </div>

          <div className="form-control">
            <label>Email *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-control">
            <label>Phone *</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="form-control">
            <label>Qualification *</label>
            <input name="qualification" value={form.qualification} onChange={handleChange} />
            {errors.qualification && <p className="error">{errors.qualification}</p>}
          </div>

          <div className="form-control">
            <label>Hospital/Clinic *</label>
            <input name="hospital" value={form.hospital} onChange={handleChange} />
            {errors.hospital && <p className="error">{errors.hospital}</p>}
          </div>

          <div className="form-control full">
            <label>Address *</label>
            <textarea name="address" value={form.address} onChange={handleChange}></textarea>
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="form-control">
            <label>Speciality *</label>
            <select name="speciality" value={form.speciality} onChange={handleChange}>
              <option value="">Select Speciality</option>
              <option>General Physician</option>
              <option>Cardiologist</option>
              <option>Dermatologist</option>
              <option>Gynecologist</option>
              <option>Orthopedic</option>
              <option>Pediatrician</option>
              <option>Neurologist</option>
              <option>ENT Specialist</option>
            </select>
            {errors.speciality && <p className="error">{errors.speciality}</p>}
          </div>

          <div className="form-control password-control">
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

          <button className="submit-btn">Register Doctor</button>
        </form>
      </div>
    </div>
  );
}
