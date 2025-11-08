"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Run only in the browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        router.replace("/login");
        setAuthorized(false);
      } else {
        setAuthorized(true);
      }
    }
  }, [router]);

  // Show loader while checking authorization
  if (authorized === null) {
    return <Loading />;
  }

  // Optionally prevent flash of admin content before redirect
  if (authorized === false) {
    return null;
  }

  return <>{children}</>;
}
