import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UserRegisterPage from "./components/UserRegisterForm";
import DoctorRegisterPage from "./components/DoctorRegisterForm";
import DoctorListPage from "./pages/DoctorListPage"; // ✅ new import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-register" element={<UserRegisterPage />} />
        <Route path="/doctor-register" element={<DoctorRegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/doctor-list" element={<DoctorListPage />} /> {/* ✅ new route */}
      </Routes>
    </Router>
  );
}

export default App;
