import Link from "next/link"
import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-sm"></div>
            <span className="text-xl font-serif font-semibold text-foreground">Luxe</span>
          </Link>
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-foreground/60">Sign in to your wellness account</p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
