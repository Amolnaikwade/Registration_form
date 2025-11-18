import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./DoctorListPage.css"; // <-- Add CSS file for animations

export default function DoctorListPage() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      navigate("/login");
    } else {
      const allDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
      setDoctors(allDoctors);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="landing-container">
      <Header />

      {/* HERO SECTION */}
      <section className="hero fade-in">
        <h1>Find the Right Doctor Easily</h1>
        <p>Your health journey starts here. Browse verified specialists.</p>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </section>

      {/* DOCTOR LIST SECTION */}
      <section className="doctor-section fade-in">
        <h2 className="section-title">Our Registered Doctors</h2>

        {doctors.length === 0 ? (
          <p className="no-doctors">No doctors registered yet.</p>
        ) : (
          <div className="doctor-grid">
            {doctors.map((doctor, index) => (
              <div key={index} className="doctor-card slide-up">
                <h3>{doctor.name}</h3>
                <p>Email: {doctor.email}</p>
                <p>Phone: {doctor.phone}</p>
                <p>Specialization: {doctor.speciality}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
