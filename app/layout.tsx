import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
           {children}
        </ThemeProvider>
        </body>
    </html>
  )
}