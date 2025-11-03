// "use client"

// import { createContext, useContext, useEffect, useState } from "react"

// const ThemeContext = createContext()

// export function ThemeProvider({ children }) {
//   const [isDark, setIsDark] = useState(false)
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//     const savedTheme = localStorage.getItem("theme")
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
//     const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark
//     setIsDark(shouldBeDark)
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = !isDark
//     setIsDark(newTheme)
//     localStorage.setItem("theme", newTheme ? "dark" : "light")
//   }

//   return <ThemeContext.Provider value={{ isDark, toggleTheme, isMounted }}>{children}</ThemeContext.Provider>
// }

// export function useTheme() {
//   const context = useContext(ThemeContext)
//   if (!context) {
//     throw new Error("useTheme must be used within ThemeProvider")
//   }
//   return context
// }
