import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminTable from "../components/AdminTable";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const allDoctors = JSON.parse(localStorage.getItem("doctors")) || [];

    if (!loggedInUser) {
      navigate("/login");
    } else {
      setUsers(allUsers);
      setDoctors(allDoctors);
    }
  }, [navigate]);

  const updateUsers = (updated) => {
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  const updateDoctors = (updated) => {
    setDoctors(updated);
    localStorage.setItem("doctors", JSON.stringify(updated));
  };

  return (
    <div className="admin-container">

      <h1 className="admin-title">Admin Dashboard</h1>

      {/* USERS SECTION */}
      <section>
        <h2>User Management</h2>
        <AdminTable
          title="Users"
          data={users}
          setData={updateUsers}
          fields={[
            "name",
            "middleName",
            "surname",
            "email",
            "phone",
            "dob",
          ]}
        />
      </section>

      {/* DOCTORS SECTION */}
      <section>
  <div className="admin-section-header">
    <h2>Doctor Management</h2>

    <button
      className="add-btn"
      onClick={() => navigate("/doctor-register")}
    >
      + Add Doctor
    </button>
  </div>
       <AdminTable
  title="Doctors"
  data={doctors}
  setData={updateDoctors}
  fields={[
    "name",
    "middleName",
    "surname",
    "email",
    "phone",
    "qualification",
    "hospital",
    "address",
    "speciality"
  ]}
/>
      </section>
    </div>
  );
}
