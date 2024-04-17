import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
