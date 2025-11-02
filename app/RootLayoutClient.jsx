"use client"

import { useTheme } from "@/context/theme-context"

export default function RootLayoutClient({ children, geistSans }) {
  const { isDark, isMounted } = useTheme()

  if (!isMounted) {
    return <>{children}</>
  }

  return <div className={isDark ? "dark" : ""}>{children}</div>
}
