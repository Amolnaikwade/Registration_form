import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header (no extra margin below) */}
      <Header />

      {/* Register Form */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
