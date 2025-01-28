"use client";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import {QueryClientProvider,QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{

    }
  }
})

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
          <body>
            <Navbar/>
              {children}
          </body>
      </html>
    </QueryClientProvider>
  );
}
