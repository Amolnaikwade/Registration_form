import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Company Name at Top */}
      <Header />

      {/* Centered Register Form */}
      <div className="flex flex-1 items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
