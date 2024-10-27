import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "./services/AuthProvider";

const poppins = Poppins({ weight: ["400",], subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Learn Next",
    template: "%s | Learn Next"
  },
  description: "learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <nav>
            <Navbar></Navbar>
          </nav>
          <main className="md:w-5/6 md:mx-auto px-3">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
