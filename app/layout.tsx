import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
export const metaData =
{
    title: "DevPair – Mentor Student Platform",
  description: "1-on-1 mentorship with live code collaboration",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ThemeProvider>
           {children}
        </ThemeProvider>
        </body>
    </html>
  )
}