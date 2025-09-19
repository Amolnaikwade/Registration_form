import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Company Name at Top */}
      <Header />

      {/* Centered Login Form */}
      <div className="flex flex-1 items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
