import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Background from "@/components/Background";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-white font-sans">
        <ThemeProvider>
          {/* Background video & overlay */}
          <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover -z-20">
            <source src="/videos/neonrain.mp4" type="video/mp4" />
          </video>
          <div className="fixed inset-0 bg-black/40 -z-10"></div>

          {/* Three.js Particles */}
          <Background />

          {/* Main content */}
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
