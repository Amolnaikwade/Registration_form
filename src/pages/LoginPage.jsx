import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Company Name at Top */}
      <Header />

      {/* Centered Login Form */}
      <div className="flex justify-center mt-8 px-4">
        <LoginForm />
      </div>
    </div>
  );
}
