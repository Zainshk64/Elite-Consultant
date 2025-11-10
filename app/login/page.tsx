import Link from "next/link";
import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-42">
      <div className="w-full">
        <LoginForm />
      </div>
    </div>
  );
}
