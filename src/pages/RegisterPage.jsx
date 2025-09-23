import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      {/* Top spacing for mobile, centered horizontally */}
      <div className="flex justify-center mt-8 px-4">
        <RegisterForm />
      </div>
    </div>
  );
}
