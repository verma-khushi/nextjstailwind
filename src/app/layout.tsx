"use client"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Provider } from "react-redux";
import store from "component/store";
const inter = Inter({ subsets: ["latin"] });
 const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Provider store={store} >
          <Navbar />
          </Provider>
        </UserProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
