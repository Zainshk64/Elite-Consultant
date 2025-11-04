import Link from "next/link"
import RegisterForm from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-42">
      <div className="w-full ">    
          <RegisterForm />
      </div>
    </div>
  )
}
