"use client";
import "./globals.css";
import Navbar from "./components/navbar/navbar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <Navbar/>
            {children}
        </body>
    </html>
  );
}
