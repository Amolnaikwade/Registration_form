import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./DoctorListPage.css";

export default function DoctorListPage() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    } else {
      const data = JSON.parse(localStorage.getItem("doctors")) || [];
      setDoctors(data);
    }
  }, [navigate, loggedInUser]);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  // Extract unique specialities
  const uniqueSpecialities = [
    ...new Set(doctors.map((d) => d.speciality.toLowerCase()))
  ];

  // Filtered doctors
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase());
    const matchesSpeciality = selectedSpeciality
      ? doctor.speciality.toLowerCase() === selectedSpeciality.toLowerCase()
      : true;

    return matchesSearch && matchesSpeciality;
  });

  return (
    <div className="dashboard-container">

      {/* NAVBAR */}
      <div className="top-nav">
        <div className="logo">XY HealthCare</div>

        <div className="nav-tabs">
          <span className="tab active">Find Doctor</span>
          <span className="tab">Video Consult</span>
        </div>

        <div className="user-area">
          <span className="hi-user">Hi, {loggedInUser?.name}</span>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">

        {/* SEARCH + DROPDOWN */}
        <div className="filter-row fade-in">

          {/* Search field */}
          <input
            type="text"
            placeholder="Search doctor by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          {/* Speciality Dropdown */}
          <select
            value={selectedSpeciality}
            onChange={(e) => setSelectedSpeciality(e.target.value)}
            className="dropdown"
          >
            <option value="">All Specialities</option>
            {uniqueSpecialities.map((sp, index) => (
              <option key={index} value={sp}>
                {sp.charAt(0).toUpperCase() + sp.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* DOCTOR LIST */}
        <h2 className="section-title">Available Doctors</h2>

        {filteredDoctors.length === 0 ? (
          <p className="no-doctors">No doctors found.</p>
        ) : (
          <div className="doctor-grid">
            {filteredDoctors.map((doctor, index) => (
              <div key={index} className="doctor-card slide-up">
                <h3>{doctor.name}</h3>
                <p>Email: {doctor.email}</p>
                <p>Phone: {doctor.phone}</p>
                <p>Speciality: {doctor.speciality}</p>

                <button className="book-btn">Book Appointment</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
