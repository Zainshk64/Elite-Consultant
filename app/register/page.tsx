import Link from "next/link"
import RegisterForm from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">HnH Consultant</h1>
          <p className="text-foreground/60">Create your account to book appointments</p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
