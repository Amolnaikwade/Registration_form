import Header from "../components/Header";
import DoctorRegisterForm from "../components/DoctorRegisterForm";

export default function DoctorRegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Centered Doctor Form */}
      <div className="flex flex-1 items-center justify-center px-4">
        <DoctorRegisterForm />
      </div>
    </div>
  );
}
