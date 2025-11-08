"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

// Prevent Next.js from statically prerendering this layout
export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false); // ensure we don't show blank screen on hydration

  useEffect(() => {
    // Run only in browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        router.replace("/login");
      } else {
        setAuthorized(true);
      }

      setChecked(true);
    }
  }, [router]);

  // While checking, show loader (avoids flash of content)
  if (!checked) {
    return <Loading />;
  }

  // If not authorized, we already redirected — show loader for now
  if (!authorized) {
    return <Loading />;
  }

  return <>{children}</>;
}
