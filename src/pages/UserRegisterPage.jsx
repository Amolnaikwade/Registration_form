import Header from "../components/Header";
import UserRegisterForm from "../components/UserRegisterForm";

export default function UserRegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Centered User Form */}
      <div className="flex flex-1 items-center justify-center px-4">
        <UserRegisterForm />
      </div>
    </div>
  );
}
