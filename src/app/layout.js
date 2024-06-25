import { Abril_Fatface } from "next/font/google";
import "./globals.css";

const font = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Eras Quiz",
  description: "Take the Eras Quiz and find out what Taylor Swift era you are in!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen"><header className="h-1/5 flex flex-col items-center justify-center"><h1 className="z-10 relative text-6xl">ERAS QUIZ</h1>
    <h2 className="z-10 relative text-3xl">What era are you in?</h2></header>{children}</body>
    </html>
  );
}
